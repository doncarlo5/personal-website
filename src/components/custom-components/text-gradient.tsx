type TextGradientProps = {
  text: string
  from?: string
  via?: string
  to?: string
}

export default function TextGradient(props: TextGradientProps) {
  const from = props.from || "from-blue-700"
  const via = props.via || "via-slate-100"
  const to = props.to || "to-red-400"

  return (
    <span className={`bg-gradient-to-r ${from} ${via} ${to} bg-300% animate-gradient bg-clip-text text-transparent`}>
      {props.text}
    </span>
  )
}
