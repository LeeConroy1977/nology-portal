const VisitorCard = ({ visitor, handleClick }) => {
  const { id, name, company, imageUrl } = visitor;
  return (
    <div
      onClick={() => handleClick(id)}
      className="flex flex-row justify-start items-center w-[80%] h-[28%] p-6 bg-white rounded-lg cursor-pointer">
      <img
        src={imageUrl}
        alt=""
        className="rounded-full w-[140px] h-[140px]  border-4 border-purple-500"
      />
      <div className="flex flex-col pl-6  pt-8 justify-start h-full w-full">
        <p className="font-semibold mt-2 mr-auto text-[1.1rem]">{name}</p>
        <p className="font-semibold mt-3 mr-auto text-[1.1rem] text-purple-500">
          {company}
        </p>
      </div>
    </div>
  );
};

export default VisitorCard;
