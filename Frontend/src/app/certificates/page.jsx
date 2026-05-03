"use client";
import { motion } from 'framer-motion'
import SectionTitle from '../../components/SectionTitle'
import Card from '../../components/Card'
import { ExternalLink, Award } from 'lucide-react'

const certificates = [
  {
    id: 1,
    title: 'Hack The Tank 3.0 Hackathon',
    organization: 'Google Developer Group (GDGC) on Campus, SVNIT Surat',
    date: '14-15 February 2026',
    credentialId: 'GDGC-HTT-2026',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1772770169/Screenshot_2026-03-05_120418_nrwnb0.png',
    url: 'https://drive.google.com/file/d/10f9ZzyHaHQzhyaTimltYyJqzeXfojvSN/view?usp=drive_link',
  },
  {
    id: 2,
    title: 'FedEx SMART Hackathon - Shaastra 2026',
    organization: 'Indian Institute of Technology (IIT) Madras',
    date: 'January 2026',
    credentialId: 'SHAAS-2026-FEDEX-SMART',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1772165146/Screenshot_2026-02-27_093117_co2dr3.png',
    url: 'https://unstop.com/certificate-preview/f020805c-d99b-49b9-b1ec-8c0f41156512',
  },
  {
    id: 3,
    title: 'Innovate X Hackathon',
    organization: 'Shyam Lal College, University of Delhi (via Unstop)',
    date: '2026',
    credentialId: 'INNOVATEX-2026-HACKATHON',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1772165149/Screenshot_2026-02-27_093138_qneyzs.png',
    url: 'https://unstop.com/certificate-preview/cbaff27f-50fb-4bea-b1ee-1de5b4250619',
  },
  {
    id: 4,
    title: 'Github Copilot Fundamentals',
    organization: 'Microsoft',
    date: 'May 2025',
    credentialId: 'META-REACT-2025-12345',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224760/certificate_of_GitHub_Copilot_pjxglv.png',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0ODc2IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODM1ODA3M184NzEyNDE4MTc0NzU2MjQ0NTIzOC5wbmciLCJ1c2VybmFtZSI6IktpcmFuIERla2FsaXlhIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7867%2FGitHub%2520Copilot%2520Fundamentals%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1517034816217588204&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVLy8PDU%2FLc0xOjEqyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAY0cM2D8AAAA%3D',
  },
  {
    id: 5,
    title: 'Introduction to the Basics of Azure Services',
    organization: 'Simplilearn',
    date: 'June 2025',
    credentialId: 'UDEMY-FS-2023-67890',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224746/certificate_azura_mfkobw.png',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIyMDEwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODU0NzAzOF84OTE3Mjc3MTc1MTI4NDU4NzQ1NC5wbmciLCJ1c2VybmFtZSI6IktpcmFuIERla2FsaXlhIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4621%2FIntroduction%2520to%2520the%2520Basics%2520of%2520Azure%2520Services%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1517034816217588204&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVd0rNsfRNCk9OjEqyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAzYiQqT8AAAA%3D',
  },
  {
    id: 6,
    title: 'REST API(intermediate)',
    organization: 'Hackerrank',
    date: 'June 2025',
    credentialId: 'FCC-JS-2023-54321',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224907/rest_i_gryttf.png',
    url: 'https://www.hackerrank.com/certificates/336e9e30d1bc',
  },
  {
    id: 7,
    title: 'Frontend Developer React',
    organization: 'Hackerrank',
    date: 'May 2023',
    credentialId: 'GOOGLE-UX-2023-11111',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224906/react1_s6l27g.png',
    url: 'https://www.hackerrank.com/certificates/6a08e4739a24',
  },
  {
    id: 8,
    title: 'Problem Solving(intermediate)',
    organization: 'Hackerrank',
    date: 'June 2025',
    credentialId: 'AWS-CLOUD-2023-22222',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224853/problem_xt51ff.png',
    url: 'https://www.hackerrank.com/certificates/52db091725a0',
  },
  {
    id: 9,
    title: 'Node.js(intermediate)',
    organization: 'Hackerrank',
    date: 'June 2025',
    credentialId: 'IBM-NODE-2023-33333',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224826/node_i_xdltyx.png',
    url: 'https://www.hackerrank.com/certificates/bc8256b8aaf8',
  },
  {
    id: 10,
    title: 'Javascript(intermediate)',
    organization: 'Hackerrank',
    date: 'May 2025',
    credentialId: 'IBM-NODE-2023-33333',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752324572/js_min860.png',
    url: 'https://www.hackerrank.com/certificates/1100a182ae95',
  },
  {
    id: 11,
    title: 'SQL(Advanced)',
    organization: 'Hackerrank',
    date: 'June 2025',
    credentialId: 'IBM-NODE-2023-33333',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224944/sql_a_cih5pj.png',
    url: 'https://www.hackerrank.com/certificates/15a8ed10bbba?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate',
  },
  {
    id: 12,
    title: 'SQL(intermediate)',
    organization: 'Hackerrank',
    date: 'June 2025',
    credentialId: 'IBM-NODE-2023-33333',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224945/sql_i_yb8fht.png',
    url: 'https://www.hackerrank.com/certificates/77bed77fbb66',
  },
  {
    id: 13,
    title: 'CSS(Basic)',
    organization: 'Hackerrank',
    date: 'May 2025',
    credentialId: 'IBM-NODE-2023-33333',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224788/Hacker_renk_css_certificate_ivyhoj.png',
    url: 'https://www.hackerrank.com/certificates/398aceec5054',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Certificates({ collapsed }) {
  const mainContent = 'md:pl-[352px] md:pr-[64px]'

  return (
    <main className={`w-full min-h-screen pt-8 pb-16 px-4 ${mainContent} transition-all duration-300`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl"
      >
        <SectionTitle 
          title="Certificates" 
          subtitle="Professional certifications and online course completions"
        />
      </motion.div>

      {/* Certificates Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
      >
        {certificates.map((cert) => (
          <motion.div key={cert.id} variants={item}>
            <Card className="h-full flex flex-col group overflow-hidden">
              {/* Certificate Preview */}
              <div className="relative h-40 w-full overflow-hidden rounded-lg mb-6">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-2 right-2 p-2 bg-black/50 rounded-full backdrop-blur-sm">
                  <Award className="w-4 h-4 text-accent" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-poppins font-bold text-lg mb-2 line-clamp-2">
                {cert.title}
              </h3>

              <p className="text-accent font-inter font-medium text-sm mb-2 line-clamp-2">
                {cert.organization}
              </p>

              <p className="text-gray-400 font-inter text-sm mb-4 flex-grow">
                Issued: <span className="text-accent">{cert.date}</span>
              </p>

              <p className="text-gray-500 font-inter text-xs mb-4 pb-4 border-b border-accent/20">
                Credential ID: {cert.credentialId}
              </p>

              {/* Actions */}
              <div className="pt-4 border-t border-accent/20">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent/10 transition-colors text-sm font-inter font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hover={false}>
            <div className="text-center">
              <div className="text-4xl font-poppins font-bold text-accent mb-2">
                {certificates.length}
              </div>
              <p className="text-gray-400 font-inter text-sm">
                Total Certificates
              </p>
            </div>
          </Card>

          <Card hover={false}>
            <div className="text-center">
              <div className="text-4xl font-poppins font-bold text-secondary mb-2">
                {certificates.filter((c) => c.title.toLowerCase().includes('hackathon')).length}
              </div>
              <p className="text-gray-400 font-inter text-sm">
                Hackathons
              </p>
            </div>
          </Card>

          <Card hover={false}>
            <div className="text-center">
              <div className="text-4xl font-poppins font-bold text-accent mb-2">
                {new Set(certificates.map((c) => c.organization)).size}
              </div>
              <p className="text-gray-400 font-inter text-sm">
                Organizations
              </p>
            </div>
          </Card>
        </div>
      </motion.section>
    </main>
  )
}

