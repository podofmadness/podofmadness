export default function ColumnSpan({ children, spanCount, className }) {
	let spanSize = `span${spanCount} `
	spanSize += className ? className : ""
	return <div className={spanSize}>{children}</div>
}
