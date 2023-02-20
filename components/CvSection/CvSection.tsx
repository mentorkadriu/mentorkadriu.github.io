export default function CvSection({title, children, ...rest}) {
  return (<section {...rest}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row">
        <div className="md:w-1/4">
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <h3 className="print:text-black print:underline no-underline print:text-[16px] mb-4 font-medium">// {title}</h3>
        </div>
        <div className="md:w-3/4">
          {children}
        </div>
      </div>
      <div className="container mx-auto px-4 flex">
        <div className="w-full my-7">
          <hr className={"border-t"}/>
        </div>
      </div>
    </section>);
}
