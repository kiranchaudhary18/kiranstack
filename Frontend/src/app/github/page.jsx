"use client";
import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Github, Users, UserPlus, BookOpen, GitFork, AlertCircle, ExternalLink, MapPin, Globe, CalendarDays } from 'lucide-react'
import SectionTitle from '../../components/SectionTitle'
import Card from '../../components/Card'

const GITHUB_USERNAME = 'kiranchaudhary18'

export default function GithubPage() {
  const mainContent = 'md:pl-[352px] md:pr-[64px]'
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [statsRepos, setStatsRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const fetchGithubData = async () => {
      try {
        setLoading(true)
        setError('')

        const [profileRes, reposResPage1, reposResPage2, reposResPage3, mediconnectSearchRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&page=1`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&page=2`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&page=3`),
          fetch(`https://api.github.com/search/repositories?q=user:${GITHUB_USERNAME}+mediconnect+in:name&per_page=1`),
        ])

        if (!profileRes.ok || !reposResPage1.ok || !reposResPage2.ok || !reposResPage3.ok) {
          throw new Error('Unable to fetch GitHub data right now.')
        }

        const profileData = await profileRes.json()
        const [reposDataPage1, reposDataPage2, reposDataPage3] = await Promise.all([
          reposResPage1.json(),
          reposResPage2.json(),
          reposResPage3.json(),
        ])
        const mediconnectSearchData = mediconnectSearchRes.ok ? await mediconnectSearchRes.json() : null

        if (isMounted) {
          setProfile(profileData)
          const safeRepos = [
            ...(Array.isArray(reposDataPage1) ? reposDataPage1 : []),
            ...(Array.isArray(reposDataPage2) ? reposDataPage2 : []),
            ...(Array.isArray(reposDataPage3) ? reposDataPage3 : []),
          ]
          setStatsRepos(safeRepos)
          const hiddenRepoNamePatterns = [
            'full-stack-development',
            'fullstack-development',
            'full_stack_development',
          ]
          const hiddenRepoExactNames = new Set([
            'kiranchaudhary18.github.io',
            'portfolio_site',
          ])

          const isMediconnectRepo = (repo) => {
            const name = (repo.name || '').toLowerCase()
            return name.includes('mediconnect') || (name.includes('medi') && name.includes('connect'))
          }

          const filteredRepos = safeRepos
              .filter((repo) => {
                const name = (repo.name || '').toLowerCase()
                if (hiddenRepoExactNames.has(name)) return false
                if (hiddenRepoNamePatterns.some((pattern) => name.includes(pattern))) return false
                if (isMediconnectRepo(repo)) return true
                return typeof repo.description === 'string' && repo.description.trim().length > 0
              })
              .sort((a, b) => Number(isMediconnectRepo(b)) - Number(isMediconnectRepo(a)))

          const hasMediconnect = filteredRepos.some((repo) => isMediconnectRepo(repo))
          const searchedMediconnectRepo = mediconnectSearchData?.items?.[0]
          const fallbackMediconnectRepo = {
            id: 'mediconnect-fallback',
            name: 'mediconnect',
            html_url: searchedMediconnectRepo?.html_url || `https://github.com/${GITHUB_USERNAME}/mediconnect`,
            description: searchedMediconnectRepo?.description || 'No description provided.',
            private: false,
            language: searchedMediconnectRepo?.language || 'N/A',
            open_issues_count: searchedMediconnectRepo?.open_issues_count || 0,
            forks_count: searchedMediconnectRepo?.forks_count || 0,
          }

          setRepos((hasMediconnect ? filteredRepos : [fallbackMediconnectRepo, ...filteredRepos]).slice(0, 12))
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Something went wrong while loading GitHub data.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchGithubData()

    return () => {
      isMounted = false
    }
  }, [])

  const repoStats = useMemo(() => {
    return {
      active: statsRepos.filter((repo) => !repo.archived).length,
      forked: statsRepos.filter((repo) => repo.fork).length,
      issuesEnabled: statsRepos.filter((repo) => repo.has_issues).length,
      pagesEnabled: statsRepos.filter((repo) => repo.has_pages).length,
    }
  }, [statsRepos])

  return (
    <main className={`flex-1 min-h-screen pt-8 pb-16 px-4 ${mainContent} transition-all duration-300`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl"
      >
        <SectionTitle
          title="GitHub"
          subtitle="Live account overview with public profile details and repositories."
        />
      </motion.div>

      {loading && (
        <div className="max-w-6xl mt-12">
          <Card className="p-8 text-center text-gray-300">Loading GitHub profile...</Card>
        </div>
      )}

      {!loading && error && (
        <div className="max-w-6xl mt-12">
          <Card className="p-8 border border-red-400/20 bg-red-500/5">
            <p className="text-red-300">{error}</p>
          </Card>
        </div>
      )}

      {!loading && !error && profile && (
        <>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-6xl mt-10"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-sky-500/[0.06] to-emerald-500/[0.05] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-sky-400/25 blur-[90px]" />
              <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-accent/20 blur-[110px]" />
              <div className="absolute inset-0 opacity-[0.22] mix-blend-overlay">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(115deg, rgba(255,255,255,0.22) 0 1px, transparent 1px 18px), repeating-linear-gradient(12deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 28px)',
                  }}
                />
              </div>
              <div className="absolute inset-0 opacity-[0.35]">
                <div className="absolute -inset-40 bg-[conic-gradient(from_220deg_at_50%_50%,rgba(56,189,248,0.20),rgba(212,175,55,0.18),rgba(16,185,129,0.18),rgba(56,189,248,0.20))] blur-2xl" />
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <img
                    src={profile.avatar_url}
                    alt={profile.login}
                    className="w-20 h-20 rounded-full border border-white/20 object-cover shadow-[0_0_0_6px_rgba(255,255,255,0.04),0_18px_40px_rgba(0,0,0,0.35)]"
                  />
                  <div className="relative rounded-2xl bg-white/[0.06] border border-white/[0.12] px-4 py-3 backdrop-blur-md">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl font-poppins font-bold text-white">{profile.name || profile.login}</h3>
                      <p className="text-sky-200/90">@{profile.login}</p>
                    </div>
                    <p className="text-gray-100/90 mt-1">{profile.bio || 'Full Stack Developer'}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-100/80 mt-3">
                      {profile.location && (
                        <span className="inline-flex items-center gap-1"><MapPin size={14} className="text-accent" /> {profile.location}</span>
                      )}
                      {profile.blog && (
                        <a href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gray-100 hover:text-accent transition-colors"><Globe size={14} className="text-accent" /> Website</a>
                      )}
                      <span className="inline-flex items-center gap-1"><CalendarDays size={14} className="text-sky-200" /> Joined {new Date(profile.created_at).toDateString()}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/90 text-black font-semibold px-5 py-3 rounded-xl hover:bg-white transition-colors shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
                >
                  <Github size={16} /> Visit Profile
                </a>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-6xl mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <Card className="p-5 border border-blue-400/20 bg-blue-500/5">
              <p className="text-gray-400 text-sm inline-flex items-center gap-2"><Users size={16} /> Followers</p>
              <p className="text-white text-4xl font-poppins font-bold mt-2">{profile.followers}</p>
            </Card>
            <Card className="p-5 border border-cyan-400/20 bg-cyan-500/5">
              <p className="text-gray-400 text-sm inline-flex items-center gap-2"><UserPlus size={16} /> Following</p>
              <p className="text-white text-4xl font-poppins font-bold mt-2">{profile.following}</p>
            </Card>
            <Card className="p-5 border border-violet-400/20 bg-violet-500/5">
              <p className="text-gray-400 text-sm inline-flex items-center gap-2"><BookOpen size={16} /> Public Repos</p>
              <p className="text-white text-4xl font-poppins font-bold mt-2">{profile.public_repos}</p>
            </Card>
            <Card className="p-5 border border-emerald-400/20 bg-emerald-500/5">
              <p className="text-gray-400 text-sm inline-flex items-center gap-2"><Github size={16} /> Public Gists</p>
              <p className="text-white text-4xl font-poppins font-bold mt-2">{profile.public_gists}</p>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-6xl mt-6"
          >
            <Card className="p-5">
              <h3 className="text-3xl font-poppins font-bold mb-4">
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
                  GitHub Badges & Status
                </span>
              </h3>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-100 border border-white/10">User</span>
                <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300 border border-green-500/30">Active</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="rounded-xl border border-white/10 p-4 bg-dark-900/40">
                  <p className="text-gray-400 text-sm">Active Repos</p>
                  <p className="text-emerald-300 text-3xl font-poppins font-bold mt-1">{repoStats.active}</p>
                </div>
                <div className="rounded-xl border border-white/10 p-4 bg-dark-900/40">
                  <p className="text-gray-400 text-sm">Forked Repos</p>
                  <p className="text-secondary text-3xl font-poppins font-bold mt-1">{repoStats.forked}</p>
                </div>
                <div className="rounded-xl border border-white/10 p-4 bg-dark-900/40">
                  <p className="text-gray-400 text-sm">Issues Enabled</p>
                  <p className="text-violet-300 text-3xl font-poppins font-bold mt-1">{repoStats.issuesEnabled}</p>
                </div>
                <div className="rounded-xl border border-white/10 p-4 bg-dark-900/40">
                  <p className="text-gray-400 text-sm">Pages Enabled</p>
                  <p className="text-secondary text-3xl font-poppins font-bold mt-1">{repoStats.pagesEnabled}</p>
                </div>
              </div>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-6xl mt-10"
          >
            <div className="mb-4">
              <h3 className="text-4xl font-poppins font-bold text-accent drop-shadow-[0_0_14px_rgba(212,175,55,0.18)]">
                Repositories
              </h3>
              <p className="text-gray-400">Showing top {repos.length} public repositories with descriptions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="p-5 h-full flex flex-col cursor-pointer">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-xl font-bold text-gray-100 leading-tight group-hover:text-accent transition-colors">{repo.name}</h4>
                    <span className="text-gray-400 hover:text-accent transition-colors">
                      <ExternalLink size={18} />
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-3 min-h-[40px]">{repo.description || 'No description provided.'}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-300">Active</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-white/10 text-gray-300">{repo.private ? 'Private' : 'Public'}</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300">Issues</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-emerald-500/20 text-emerald-300">Wiki</span>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 text-sm text-gray-400 flex items-center gap-4">
                    <span className="inline-flex items-center gap-1"><BookOpen size={14} /> {repo.language || 'N/A'}</span>
                    <span className="inline-flex items-center gap-1"><AlertCircle size={14} /> {repo.open_issues_count || 0}</span>
                    <span className="inline-flex items-center gap-1"><GitFork size={14} /> {repo.forks_count || 0}</span>
                  </div>
                  </Card>
                </a>
              ))}
            </div>
          </motion.section>
        </>
      )}
    </main>
  )
}

