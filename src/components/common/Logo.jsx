import logo from '../../assets/images/Utah-Saves-Logo.png'

function Logo({ className = '', imageClassName = '' }) {
  return (
    <div className={className}>
      <img
        src={logo}
        alt="Utah Saves"
        className={`h-auto w-full max-w-[220px] ${imageClassName}`.trim()}
      />
    </div>
  )
}

export default Logo
