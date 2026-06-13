import { NextResponse } from 'next/server';

export async function GET() {
  const username = "KiranChaudhary";
  
  // Try direct GraphQL fetch first
  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      body: JSON.stringify({
        query: `
          query userProblemsSolved($username: String!) {
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
              profile {
                ranking
              }
            }
          }
        `,
        variables: { username }
      }),
      next: { revalidate: 60 } // Cache for 60 seconds
    });

    if (response.ok) {
      const data = await response.json();
      if (!data.errors && data.data?.matchedUser) {
        const matchedUser = data.data.matchedUser;
        const submissionStats = matchedUser.submitStats.acSubmissionNum;
        const ranking = matchedUser.profile.ranking;

        const stats = {
          ranking: ranking || 0,
          totalSolved: 0,
          easySolved: 0,
          mediumSolved: 0,
          hardSolved: 0
        };

        submissionStats.forEach(stat => {
          if (stat.difficulty === 'All') stats.totalSolved = stat.count;
          if (stat.difficulty === 'Easy') stats.easySolved = stat.count;
          if (stat.difficulty === 'Medium') stats.mediumSolved = stat.count;
          if (stat.difficulty === 'Hard') stats.hardSolved = stat.count;
        });

        return NextResponse.json(stats);
      }
    }
  } catch (err) {
    console.error("Direct GraphQL fetch failed, trying public API:", err);
  }

  // Fallback to a public LeetCode stats API if direct fetch fails
  try {
    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`, {
      next: { revalidate: 60 }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.status === "success") {
        return NextResponse.json({
          ranking: data.ranking || 393442,
          totalSolved: data.totalSolved || 353,
          easySolved: data.easySolved || 155,
          mediumSolved: data.mediumSolved || 175,
          hardSolved: data.hardSolved || 23
        });
      }
    }
  } catch (err) {
    console.error("Fallback public API 1 failed:", err);
  }

  // Second fallback public API
  try {
    const res = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`, {
      next: { revalidate: 60 }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.totalSolved !== undefined) {
        return NextResponse.json({
          ranking: data.ranking || 393442,
          totalSolved: data.totalSolved,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0
        });
      }
    }
  } catch (err) {
    console.error("Fallback public API 2 failed:", err);
  }

  // Default hardcoded stats (with the user's latest 353 solved count)
  return NextResponse.json({
    ranking: 393442,
    totalSolved: 353,
    easySolved: 155,
    mediumSolved: 175,
    hardSolved: 23
  });
}
