"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import InputField from "../InputField"
import Image from "next/image"

const schema = z.object({
    username: z
        .string()
        .min(3, { message: "Username must be at least 3 characters long!" })
        .max(20, { message: "Username must be at most 3 characters long!" }),
    email: z
        .string()
        .email({ message: "Invalid email address!" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long!" }),
    firstName: z
        .string()
        .min(1, { message: "First name is required!" }),
    lastName: z
        .string()
        .min(1, { message: "Last name is required!" }),
    phone: z
        .string()
        .min(1, { message: "Phone is required!" }),
    address: z
        .string()
        .min(1, { message: "Address is required!" }),
    bloodType: z
        .string()
        .min(1, { message: "Blood Type is required!" }),
    birthday: z
        .date({ message: "Birthday is required!" }),
    sex: z.enum(["male", "female"], { message: "Sex is required!" }),
    image: z.instanceof(File, { message: "Image is required!" }),
})

type Inputs = z.infer<typeof schema>

const LessonForm = ({ type, data }: {
    type: "create" | "update"
    data?: any
}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit(data => {
        console.log(data)
    })

    return (
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <h1 className="text-lg font-semibold">{ `${ type === 'create'? 'Create a new lesson' : 'Update lesson' }` }</h1>
            <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-400 font-medium border-b pb-1">Authentication Information</span>
                <div className="flex flex-wrap items-start justify-between gap-y-4">
                    <InputField label="Username" type="text" register={register} name="username"
                        defaultValue={data?.username} error={errors?.username} />
                    <InputField label="Email" type="email" register={register} name="email"
                        defaultValue={data?.email} error={errors?.email} />
                    <InputField label="Password" type="password" register={register} name="password"
                        defaultValue={data?.password} error={errors?.password} />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-400 font-medium border-b pb-1">Authentication Information</span>
                <div className="flex flex-wrap gap-y-4 items-start justify-between">
                    <div className="flex flex-col gap-2 w-full md:w-[calc(33.33%-1rem)]">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-500">Lesson&apos;s Photo</label>
                            <div className="flex flex-col gap-1 py-2 pr-2 items-start justify-start rounded-md bg-white">
                                <label className="text-xs text-blue-600 flex items-center gap-2 cursor-pointer"
                                    htmlFor="image">
                                    <Image src="/upload.png" alt="" width={22} height={22} />
                                    <span className="font-semibold">Upload a image</span>
                                </label>
                                <input type="file" id="image" {...register("image")} className="hidden" />
                            </div>
                            {errors.image?.message && <p className="text-[11px] text-red-500 italic">{errors.image?.message.toString()}</p>}
                        </div>

                    </div>
                    <InputField
                        label="First Name"
                        name="firstName"
                        defaultValue={data?.firstName}
                        register={register}
                        error={errors.firstName}
                    />
                    <InputField
                        label="Last Name"
                        name="lastName"
                        defaultValue={data?.lastName}
                        register={register}
                        error={errors.lastName}
                    />
                    <InputField
                        label="Phone"
                        name="phone"
                        defaultValue={data?.phone}
                        register={register}
                        error={errors.phone}
                    />
                    <InputField
                        label="Address"
                        name="address"
                        defaultValue={data?.address}
                        register={register}
                        error={errors.address}
                    />
                    <InputField
                        label="Blood Type"
                        name="bloodType"
                        defaultValue={data?.bloodType}
                        register={register}
                        error={errors.bloodType}
                    />
                    <InputField
                        label="Birthday"
                        name="birthday"
                        defaultValue={data?.birthday}
                        register={register}
                        error={errors.birthday}
                        type="date"
                    />
                    <div className="flex flex-col gap-2 w-full md:w-[calc(33.33%-1rem)]">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-500">Sex</label>
                            <select className="ring-[1px] ring-slate-300 p-2 rounded-md text-sm w-full">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {errors.sex?.message && <p className="text-[11px] text-red-500 italic">{errors.sex?.message.toString()}</p>}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-[calc(33.33%-1rem)]"></div>
                </div>
            </div>
            <button className="p-2 text-sm mt-5 font-medium bg-blue-600 hover:transform hover:bg-blue-700 hover:duration-300 text-white rounded-md" type="submit">{type === 'create' ? 'Create' : 'Update'}</button>
        </form>
    )
}

export default LessonForm