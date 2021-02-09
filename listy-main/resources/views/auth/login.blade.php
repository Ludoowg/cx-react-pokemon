<x-guest-layout>
    <div style="margin-left: 50px; margin-right: 50px;">
    
        <div style="margin:50px; text-align:center;">
        <img src="/images/listy_beige.png" style="width:150px;display: block;margin-left: auto;margin-right: auto">
        </div>

        <x-jet-validation-errors class="mb-4"/>

        @if (session('status'))
            <div class="mb-4 font-medium text-sm text-green-600">
                {{ session('status') }}
            </div>
        @endif

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <div class="mt-4" style="margin-top: 180px;">
                <input id="email" class="block mt-1 w-full" style="border-radius: 10px; height: 50px; margin-bottom: 20px;" type="email" name="email" :value="old('email')" placeholder="Email" required autofocus />
            </div>


            <div class="mt-4">
                <input id="password" class="block mt-1 w-full" style="border-radius: 10px; height: 50px;" type="password" name="password" placeholder="Password" required autocomplete="current-password" />
            </div>
            <style>
                
            </style>  

            <div class="block mt-4">
                @if (Route::has('password.request'))
                    <a class="text-ms text-gray-600 hover:text-gray-900 text-right" style="color: white;" href="{{ route('password.request') }}">
                        {{ __('Forgot password?') }}
                    </a>
                @endif
                
                <button class="button-listy" style="margin-top: 80px;">
                    {{ __('Login') }}
                </button>
                <div class="block mt-4" style="margin-top: 50px;">
                <a class="center" style="color: white;" href="{{ route('register') }}">Create New Account</a>
                </div>
            </div>
            
        </form>
    </div>
</x-guest-layout>

<style>
html, body { height : 100%; }

body {
    margin:0;
padding:0;
    background-image : url("/images/background.png");   
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}

.button-listy {
    margin-top:20px;
    font-weight : bold;
    color: white;
    border-radius: 10px;
    width : 100%;
    padding: 15px;
    background-color: #F25C05;
    cursor : pointer;
}
.button-listy:hover {
    
}
.button-listy:active {
}
.center {
    display: flex;
    justify-content: center;
    text-decoration: underline;
}
.text-right {
    display: flex;
    justify-content: flex-end;
}
</style>