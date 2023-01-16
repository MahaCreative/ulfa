<?php

namespace App\Http\Middleware;

use App\Models\ProfileAkun;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // $profile = $request->user()->profile()->first();
        $profile = ProfileAkun::where('user_id', Auth::user()->id)->get();

        if(count($profile) == 0){
            return redirect()->route('setting');
        }else{
            return $next($request);
        }
        

    }
}
