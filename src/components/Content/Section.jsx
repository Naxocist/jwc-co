import Item from "./Item"

function Section({items, word}) {

  return (
    <div className="w-fit m-auto">
      <h1 className="font-[700] text-[48px] text-center mb-[53px]">{word}</h1>

      <div className="flex gap-[20px] mb-[37px]">
        {Object.entries(items).map( ([key, value]) => {
          return <Item key={key} {...value}/>
        })}
      </div>

      <div className="w-[218px] h-[62px] m-auto bg-white border-[rgba(0,0,0,0.1)] border-[1px] rounded-[62px] flex justify-center items-center">
        <p className="font-[500]">View All</p>
      </div>
    </div>
  )
}

export default Section;
