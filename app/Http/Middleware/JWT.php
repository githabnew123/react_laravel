<?php
    use JWAuth;
    namespace App\Http\Middleware;


    use Illuminate\Auth\Middleware\Authenticate as Middleware;

    class JWT extends Middleware
    {
        public function handle($request, Closure $next)
        {
            JWTAuth::parseToken()->authenticate();
            return $next($request);
        }
    }
?>