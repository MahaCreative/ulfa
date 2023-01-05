<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        $event = Event::fastPaginate();
        return inertia('Event/Event', ['event' => EventResource::collection($event)]);
    }
    public function create()
    {
        return inertia('Event/Create');
    }

    public function store(Request $request)
    {
        // dd($request->file('thumbnail'));
        $attr = $request->validate([
            'judul' => 'required',
            'tanggal_mulai' => 'required|date|after:now',
            'tanggal_berakhir' => 'required|date|after:tanggal_mulai',
            'penyelenggara' => 'required',
            'thumbnail' => 'required',
            'kontent' => 'required',
        ]);
        $attr['slug'] = \Str::slug($attr['judul']);
        $attr['thumbnail'] = $request->file('thumbnail') ? $request->file('thumbnail')->storeAs('images/profile', $request->file('thumbnail')->getClientOriginalName()) : null;
        $event = Event::create($attr);
    }
    public function update($slug)
    {
        $event = Event::where('slug', $slug)->first();

        return inertia('Event/Update', ['event' => $event]);
    }
    public function store_update(Request $request)
    {
        // dd($request->all());
        // $attr = $request->validate([
        //     'judul' => 'required',
        //     'tanggal_mulai' => 'required|date|after:now',
        //     'tanggal_berakhir' => 'required|date|after:tanggal_mulai',
        //     'penyelenggara' => 'required',
        //     'thumbnail' => 'required',
        //     'kontent' => 'required',
        // ]);
        $attr = [];
        $judul = $request->data['judul'];
        $attr['slug'] = \Str::slug($judul);
        $attr['thumbnail'] = $request->file('thumbnail') ? $request->file('thumbnail')->storeAs('images/profile', $request->file('thumbnail')->getClientOriginalName()) : null;
        $update = Event::findOrFail($request->data['id']);

        $update->update([
            'judul' => $request->data['judul'],
            'tanggal_mulai' => $request->data['tanggal_mulai'],
            'tanggal_berakhir' => $request->data['tanggal_berakhir'],
            'penyelenggara' => $request->data['penyelenggara'],
            'thumbnail' => $attr['thumbnail'],
            'slug' => $attr['slug'],
            'kontent' => $request->data['kontent'],
        ]);
    }
}