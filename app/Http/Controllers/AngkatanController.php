<?php

namespace App\Http\Controllers;

use App\Models\Angkatan;
use Illuminate\Http\Request;

class AngkatanController extends Controller
{
    public function index(Request $request){
        $angkatan = Angkatan::latest()->get();
        // dd($angkatan);
        return inertia('Angkatan/Angkatan', ['angkatan' => $angkatan]);
    }
    public function store(Request $request){
        $request->validate([
            'angkatan' => ['required', 'unique:angkatans,angkatan']
        ]);
        $angkatan = Angkatan::create([
            'angkatan' => $request->angkatan
        ]);
        if($angkatan){
             return redirect()->back()->with([
                'type' => 'success',
                'message' => 'Berhasil menambah data'
            ]);
        }else{
            return redirect()->back()->with([
                'type' => 'error',
                'message' => 'Gagal menambah data'
            ]);
        }
    }

    public function update(Request $request){
        
        $request->validate([
            'angkatan' => ['required', 'unique:angkatans,angkatan']
        ]);
        $angkatan = Angkatan::findOrFail($request->id);
        $angkatan->update([
            'angkatan' => $request->angkatan
        ]);
        return redirect()->back()->with([
                'type' => 'success',
                'message' => 'Berhasil mengedit data'
            ]);
        
    }

    public function delete(Request $request){
        $id = $request->id;
        $angkatan = Angkatan::find($id);
        if($angkatan){
            $angkatan->delete();
            return redirect()->back()->with([
                'type' => 'success',
                'message' => 'Berhasil menghapus data'
            ]);
        }
        return redirect()->back()->with([
                'type' => 'error',
                'message' => 'Gagal menghapus data'
            ]);
        
    }
}
