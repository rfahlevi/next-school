import Image from "next/image"

export const UserCard = ({ type } : { type: String }) => (
    <div className="rounded-2xl odd:bg-blue-600 even:bg-yellow-400 odd:text-white p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium odd:text-white  text-gray-500">{type}s</h2>
    </div>
)

export default UserCard