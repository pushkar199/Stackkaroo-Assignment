import Image from "next/image";

const Button = ({ iconUrl, name }) => {
  return (
    <button className="flex bg-pale-orange p-3 rounded-full items-center gap-3 hover:bg-orange-600 transition-all">
      <Image
        src={iconUrl}
        height={30}
        width={30}
        alt="call"
        className="bg-white rounded-full p-1 object-contain max-sm:w-[30px]"
      />
      <span className="text-white font-semibold">{name}</span>
    </button>
  );
};

export default Button;
