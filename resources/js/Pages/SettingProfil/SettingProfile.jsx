import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import App from "../../Layout/App";
import Account from "./Account/Account";
import ProfileUpdate from "./Profile/ProfileUpdate";

export default function SettingProfile() {
    const {profile} = usePage().props
    return (
        <div className="">
            <div className="py-2.5 px-4 border-b border-gray-400">
                <h3 className="font-fira font-bold text-2xl">Ubah Data Akun</h3>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 my-2.5 px-4">
                <div className="w-full">
                    <h3 className="bg-emerald-400 py-2.5 px-4 w-full text-white font-fira">Account</h3>
                    <div className="w-full">
                    <Account/>
                    </div>
                </div>
                <div className="w-full">
                    <h3 className="bg-emerald-400 py-2.5 px-4 w-full text-white font-fira">Profile</h3>
                    <div>
                    <ProfileUpdate/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
SettingProfile.layout = (page) => <App children={page} />;
