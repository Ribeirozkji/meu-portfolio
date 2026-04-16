type SectionTitleProps = {
  label: string
  title: string
}

function SectionTitle({ label, title }: SectionTitleProps) {
  return (
    <div className="section-header">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionTitle