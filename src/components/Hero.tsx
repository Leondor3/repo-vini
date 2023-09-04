import HeroBanner from '../assets/gallery.png'
import border from '../assets/border.png'

export function Hero() {
    return (
        <section className="relative pt-24 bg-zinc-950">
            <div className='container'>
                <div className='flex items-center h-full [-webkit-mask-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.2),rgba(0,0,0,1),rgba(0,0,0,.2),rgba(0,0,0,0))] '>
                    <div className='w-1/2 space-y-2'>
                        <span className='text-blue-400 text-sm bg-blue-600/40 p-2 rounded-md'>Designer Gráfico</span>
                        <h1 className='text-7xl font-bold'>Vinicius Ferreira</h1>
                        <p className='text-gray-200 w-[450px]'>Designer gráfico dedicado a transformar ideias em imagens cativantes. Minha trajetória é um reflexo de minha paixão pela estética e comunicação visual eficaz. Explore meu portfólio e descubra o poder do design.</p>
                        <div>
                            <button>Entre em Contacto</button>
                            <button>Veja Mais</button>
                        </div>
                    </div>
                    <div className='flex-1 h-[650px]'>
                        <img className='object-cover w-full h-auto' src={HeroBanner} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}