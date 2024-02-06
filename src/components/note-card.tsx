export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
      
      <span className="text-sm font-medium text-slate-300">
        há 2 dias
      </span>
      
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum justo convallis bibendum rutrum interdum arcu aliquet convallis aptent fermentum, risus ac ornare himenaeos nulla duis hac luctus sociosqu hendrerit. dictumst massa aenean faucibus in nisi, gravida rutrum pulvinar dictum, donec laoreet odio nullam. dui scelerisque integer venenatis curae consequat varius nibh accumsan.  
      </p>

      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
  </button>
  )
}