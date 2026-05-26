import { useState, useEffect } from 'react'
import { Mail, Lock, ArrowLeft, X, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'
import LogoSvg from './LogoSvg'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: AuthMode
}

type AuthMode = 'login' | 'register' | 'forgot'

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode)

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, initialMode])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)
    setLoading(true)

    // Form validations
    if (mode === 'register' && password !== confirmPassword) {
      setTimeout(() => {
        setMessage({ type: 'error', text: 'Passwords do not match.' })
        setLoading(false)
      }, 800)
      return
    }

    if (!email) {
      setTimeout(() => {
        setMessage({ type: 'error', text: 'Please enter a valid email address.' })
        setLoading(false)
      }, 500)
      return
    }

    // Simulate Supabase authentication logic
    setTimeout(() => {
      setLoading(false)
      if (mode === 'login') {
        setMessage({ type: 'success', text: 'Welcome back! Login successful.' })
        setTimeout(() => {
          onClose()
          setMessage(null)
          setEmail('')
          setPassword('')
        }, 1500)
      } else if (mode === 'register') {
        setMessage({ type: 'success', text: 'Registration successful! Verification email sent.' })
        setTimeout(() => {
          setMode('login')
          setMessage(null)
          setPassword('')
          setConfirmPassword('')
        }, 2000)
      } else {
        setMessage({ type: 'success', text: 'Password reset link sent to your email.' })
        setTimeout(() => {
          setMode('login')
          setMessage(null)
        }, 2000)
      }
    }, 1500)
  }

  const handleGoogleLogin = () => {
    setLoading(true)
    setMessage(null)
    setTimeout(() => {
      setLoading(false)
      setMessage({ type: 'success', text: 'Redirecting to Google authentication...' })
      setTimeout(() => {
        onClose()
        setMessage(null)
      }, 1500)
    }, 1000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with premium glassmorphic blur */}
      <div 
        className="absolute inset-0 bg-zinc-950/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-[960px] h-auto min-h-[580px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/80 flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200 z-10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 md:left-auto md:right-4 z-30 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-650 hover:text-zinc-900 border border-zinc-200 transition-colors shadow-xs cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-4.5 w-4.5" />
        </button>

        {/* Left Side: Form (50%) */}
        <div className="w-full md:w-1/2 p-8 sm:p-10 md:p-12 flex flex-col justify-between bg-white relative z-20">
          <div>
            {/* Header / Logo */}
            <div className="flex items-center gap-2.5 mb-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 text-white border border-zinc-800 shadow-sm">
                <LogoSvg className="h-5 w-5" />
              </div>
              <span className="font-display text-base font-bold tracking-tight text-zinc-950">
                Iterum<span className="text-slate-400 font-normal">.ai</span>
              </span>
            </div>

            {/* Form Title & Subtitle */}
            <div className="mb-6">
              {mode === 'login' && (
                <>
                  <h3 className="font-display text-2xl font-black text-zinc-950 tracking-tight leading-none">
                    Welcome back
                  </h3>
                  <p className="text-slate-500 text-xs mt-2 font-sans font-medium">
                    Access your personalized interview simulations and metrics.
                  </p>
                </>
              )}
              {mode === 'register' && (
                <>
                  <h3 className="font-display text-2xl font-black text-zinc-950 tracking-tight leading-none">
                    Create account
                  </h3>
                  <p className="text-slate-500 text-xs mt-2 font-sans font-medium">
                    Start your structured career training journey today.
                  </p>
                </>
              )}
              {mode === 'forgot' && (
                <>
                  <button 
                    onClick={() => { setMode('login'); setMessage(null); }}
                    className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-zinc-950 mb-3 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" /> Back to login
                  </button>
                  <h3 className="font-display text-2xl font-black text-zinc-950 tracking-tight leading-none">
                    Forgot password
                  </h3>
                  <p className="text-slate-500 text-xs mt-2 font-sans font-medium">
                    We will send you instructions to reset your password.
                  </p>
                </>
              )}
            </div>

            {/* Notification Messages */}
            {message && (
              <div className={`p-3.5 rounded-xl border mb-5 flex items-start gap-2.5 text-xs font-sans font-semibold animate-in fade-in duration-200 ${
                message.type === 'success' 
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                  : 'bg-rose-50 border-rose-200 text-rose-800'
              }`}>
                {message.type === 'success' ? (
                  <CheckCircle className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="h-4.5 w-4.5 text-rose-600 flex-shrink-0 mt-0.5" />
                )}
                <span>{message.text}</span>
              </div>
            )}

            {/* Google OAuth (only for login & register modes) */}
            {mode !== 'forgot' && (
              <>
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-zinc-200 hover:border-zinc-300 rounded-xl font-sans font-bold text-xs text-zinc-800 bg-white hover:bg-slate-50 hover:shadow-xs transition-all cursor-pointer active:scale-[0.99] disabled:opacity-50"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                  <div className="h-px bg-zinc-200 flex-grow" />
                  <span className="text-[10px] font-bold text-zinc-450 uppercase tracking-widest">or email login</span>
                  <div className="h-px bg-zinc-200 flex-grow" />
                </div>
              </>
            )}

            {/* Standard Credentials Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input
                    type="email"
                    required
                    disabled={loading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 hover:bg-zinc-100/50 border border-zinc-200 focus:bg-white focus:border-zinc-950 rounded-xl text-xs font-sans font-medium text-zinc-900 outline-none transition-colors"
                  />
                </div>
              </div>

              {mode !== 'forgot' && (
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-wider">
                      Password
                    </label>
                    {mode === 'login' && (
                      <button
                        type="button"
                        onClick={() => { setMode('forgot'); setMessage(null); }}
                        className="text-[10px] font-bold text-zinc-500 hover:text-zinc-950 transition-colors cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                    <input
                      type="password"
                      required
                      disabled={loading}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 hover:bg-zinc-100/50 border border-zinc-200 focus:bg-white focus:border-zinc-950 rounded-xl text-xs font-sans font-medium text-zinc-900 outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              {mode === 'register' && (
                <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                  <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-wider mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                    <input
                      type="password"
                      required
                      disabled={loading}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 hover:bg-zinc-100/50 border border-zinc-200 focus:bg-white focus:border-zinc-950 rounded-xl text-xs font-sans font-medium text-zinc-900 outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-zinc-950 hover:bg-zinc-900 text-white font-sans font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer active:scale-[0.99] shadow-md shadow-zinc-950/10 disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center gap-1.5">
                    <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    <span>
                      {mode === 'login' && 'Sign In'}
                      {mode === 'register' && 'Create Account'}
                      {mode === 'forgot' && 'Send Reset Link'}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Bottom toggle links */}
          <div className="mt-8 text-center text-xs font-sans font-semibold text-slate-550 border-t border-zinc-100 pt-6">
            {mode === 'login' ? (
              <p>
                Don't have an account?{' '}
                <button
                  onClick={() => { setMode('register'); setMessage(null); }}
                  className="text-zinc-950 font-extrabold hover:underline cursor-pointer"
                >
                  Create one now
                </button>
              </p>
            ) : (
              mode === 'register' && (
                <p>
                  Already have an account?{' '}
                  <button
                    onClick={() => { setMode('login'); setMessage(null); }}
                    className="text-zinc-950 font-extrabold hover:underline cursor-pointer"
                  >
                    Sign in here
                  </button>
                </p>
              )
            )}
          </div>
        </div>

        {/* Right Side: Film-Noir dossier image & details overlay (50%) */}
        <div className="hidden md:block w-1/2 bg-zinc-950 relative overflow-hidden select-none">
          {/* Subtle grid pattern matching landing page overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:24px_24px] opacity-10 z-10" />
          
          {/* Premium film-noir visual image */}
          <img 
            src="/login_banner.png" 
            alt="Iterum noir dossier desk" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent z-10" />

          {/* Elegant Logo Overlay */}
          <div className="absolute top-8 left-8 z-20 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white backdrop-blur-md">
              <LogoSvg className="h-5 w-5" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Iterum<span className="text-white/60 font-normal">.ai</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
