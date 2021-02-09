<x-guest-layout>
    <div style="margin-left: 50px; margin-right: 50px;">
    
        <div style="margin:50px; text-align:center;">

            <a href="/login">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 72.552 107.505" style="position:absolute;top:0;left:0px;margin-top:50px;margin-left:20px;" >
                    <defs>
                        <filter id="Tracé_94" x="0" y="0" width="72.552" height="107.505" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="5" result="blur"/>
                            <feFlood flood-opacity="0.161"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                        </filter>
                    </defs>
                <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_94)">
                    <path id="Tracé_94-2" data-name="Tracé 94" d="M439.469,316.567l-33.5,33.5,34.1,34.1" transform="translate(-387.47 -299.62)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="7"/>
                </g>
                </svg>
            </a>

            <h1 style="color:white; position:absolute; top:0; margin-top:55px; font-size:20px; font-weight:bold;">Forgot Password</h1>
        </div>
        
        <p style="color:white; margin-top: 150px; width: 250px; text-align: center;">Enter your email and will send</p>
        <p style="color:white; width: 250px; margin-bottom: 50px; text-align: center;">you instructions on how to reset it.</p>

        <x-jet-validation-errors class="mb-4"/>

        @if (session('status'))
            <div class="mb-4 font-medium text-sm text-green-600">
                {{ session('status') }}
            </div>
        @endif

        <form method="POST" action="{{ route('password.email') }}">
            @csrf

            <div class="mt-4" style="margin-top: 0px;">
                <input id="email" class="block mt-1 w-full" style="border-radius: 10px; height: 50px; margin-bottom: 20px;" type="email" name="email" :value="old('email')" placeholder="Email" required autofocus />
            </div>

            <div class="block mt-4">
                
                <button class="button-listy" style="margin-top: 80px;">
                    {{ __('Reset') }}
                </button>
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