<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', action: function () {
    return Inertia::render('landing',['title' => 'mon titre']);
});

Route::get('/dashboard', action: function () {
    return Inertia::render('myoffer',);
});

Route::get('/demande', action: function () {
    return Inertia::render('demande',);
});

Route::get('/newoffer', action: function () {
    return Inertia::render('newoffer',);
});
Route::get('/avaible', action: function () {
    return Inertia::render('available',);
});
Route::get('/transfert', action: function () {
    return Inertia::render('offertransfert',);
});



//Route::get('/available-offers', function () {
 //   return Inertia::render('AvailableOffers');
//});

//Route::get('/my-offers', function () {
//    return Inertia::render('MyOffers');
//});

//Route::get('/dashboard', function () {

//})->middleware(['auth', 'verified'])->name('dashboard');

//Route::middleware('auth')->group(function () {
  //  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
 //   Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  //  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
//});

//require __DIR__.'/auth.php';
