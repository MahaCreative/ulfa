<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Http\Request;

class EventUserController extends Controller
{
    public function index()
    {
        $event = Event::latest()->get();
        $eventBerlangsung = Event::where([['tanggal_mulai', '>=', Carbon::now()], ['tanggal_berakhir', '<=', Carbon::now()->endOfMonth()]])->latest()->get()->take(5);
        $eventTerbaru = Event::latest()->get()->take(20);
        $eventSelesai = Event::where('tanggal_berakhir', '<', Carbon::now())->latest()->get()->take(10);
        return inertia('Event/User/Index', ['event' => EventResource::collection($event), 'event_berlangsung' => $eventBerlangsung, 'event_terbaru' => $eventTerbaru, 'event_berakhir' => $eventSelesai]);
        // return inertia('Event/User/Index', ['event' => ]);
    }

    public function show($slug)
    {
        $event = Event::where('slug', $slug)->first();
        $eventBerlangsung = Event::where([['tanggal_mulai', '>=', Carbon::now()], ['tanggal_berakhir', '<=', Carbon::now()->endOfMonth()]])->latest()->get()->take(5);
        $eventTerbaru = Event::latest()->get()->take(20);
        $eventSelesai = Event::where('tanggal_berakhir', '<', Carbon::now())->latest()->get()->take(10);
        return inertia('Event/User/Show', ['event' => $event, 'event_berlangsung' => $eventBerlangsung, 'event_terbaru' => $eventTerbaru, 'event_berakhir' => $eventSelesai]);
    }
}
