<?php

use App\Http\Controllers\Api\MailController;
use Illuminate\Support\Facades\Route;

Route::post('/sendMessage', [MailController::class, 'send']);