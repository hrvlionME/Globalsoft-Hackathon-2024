<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\MailRequest;
use App\Mail\Message;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    //
    public function send(MailRequest $request)
    {
        Mail::to("hrvoje.kozul@fsre.sum.ba")->send(new Message($request->message, $request->name, $request->email));
        Mail::to("vedran.maric@fsre.sum.ba")->send(new Message($request->message, $request->name, $request->email));
        Mail::to("leo.petrovic@fsre.sum.ba")->send(new Message($request->message, $request->name, $request->email));
    }
}