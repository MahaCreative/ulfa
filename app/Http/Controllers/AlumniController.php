<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProfileAkunResource;
use App\Models\ProfileAkun;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AlumniController extends Controller
{
    public function index(Request $request)
    {
        $alumni = [];
        if ($request->search) {
            $alumni = ProfileAkun::join('angkatans', 'profile_akuns.angkatan_id', 'angkatans.id')
                ->select(['profile_akuns.*', 'angkatans.angkatan as angkatan'])
                ->orWhere([['profile_akuns.nama_lengkap', 'like', '%' . $request->search . '%'], ['profile_akuns.status_anggota', '=', 'alumni']])
                ->orWhere([['angkatan',  $request->search,], ['profile_akuns.status_anggota', '=', 'alumni']])
                ->fastPaginate();
        } else {
            $alumni = ProfileAkun::join('angkatans', 'profile_akuns.angkatan_id', 'angkatans.id')
                ->select(['profile_akuns.*', 'angkatans.angkatan as angkatan', 'angkatans.id as angkatan_id'])
                ->where('profile_akuns.status_anggota', 'alumni')
                ->fastPaginate();
        }

        return inertia('Alumni/Alumni', ['alumni' => ProfileAkunResource::collection($alumni)]);
    }
    public function store(Request $request)
    {

        $attr = $request->validate([
            'nama_lengkap' => 'required|min:6',
            'jenis_kelamin' => 'required',
            'alamat' => 'required|min:6',
            'tempat_lahir' => 'required',
            'tanggal_lahir' => 'required',
            'telp' => 'required|min:11|max:12',
            'angkatan' => 'required',
            'thumbnail' => 'image|mimes:png,jpg,jpeg'
        ]);
        $url = $request->file('thumbnail') ? $request->file('thumbnail')->storeAs('images/profile', $request->file('thumbnail')->getClientOriginalName()) : null;

        $profile = ProfileAkun::create([
            'nama_lengkap' => $request->nama_lengkap,
            'jenis_kelamin' => $request->jenis_kelamin,
            'alamat' => $request->alamat,
            'tempat_lahir' => $request->tempat_lahir,
            'tanggal_lahir' => Carbon::create($request->tanggal_lahir),
            'telp' => $request->telp,
            'angkatan_id' => $request->angkatan,
            'status_anggota' => 'alumni',
            'thumbnail' => $url
        ]);
        // sleep(10);
        return redirect()->back();
    }
    public function update(Request $request)
    {

        $profile = ProfileAkun::findOrFail($request->id);
        // dd($profile);
        // $attr = $request->validate([
        //     'nama_lengkap' => 'required|min:6',
        //     'jenis_kelamin' => 'required',
        //     'alamat' => 'required|min:6',
        //     'tempat_lahir' => 'required',
        //     'tanggal_lahir' => 'required',
        //     'telp' => 'required|min:11|max:12',
        //     'angkatan' => 'required',
        //     // 'thumbnail' => 'image|mimes:png,jpg,jpeg'
        // ]);
        $url = $request->file('thumbnail') ? $request->file('thumbnail')->storeAs('images/profile', $request->file('thumbnail')->getClientOriginalName()) : null;

        $profile->update([
            'nama_lengkap' => $request->nama_lengkap,
            'jenis_kelamin' => $request->jenis_kelamin,
            'alamat' => $request->alamat,
            'tempat_lahir' => $request->tempat_lahir,
            'tanggal_lahir' => Carbon::create($request->tanggal_lahir),
            'telp' => $request->telp,
            'angkatan_id' => $request->angkatan,
            'status_anggota' => 'alumni',
            'thumbnail' => $url
        ]);
        return redirect()->back();
    }
    public function delete(Request $request)
    {
        // dd($request->all());
        $profile = ProfileAkun::findOrFail($request->id);
        $profile->delete();
        return redirect()->back();
    }
}
