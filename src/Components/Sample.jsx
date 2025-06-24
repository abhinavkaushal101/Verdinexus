import React from 'react'

const Sample = () => {
  return (
  <>
  
<section className="relative h-[90vh] bg-cover bg-center text-white" style={{ backgroundImage: `url('/hero-bg.jpg')` }}>
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="relative z-10 max-w-4xl mx-auto text-center pt-32">
    <h1 className="text-5xl font-bold leading-tight">Empowering European SMEs</h1>
    <p className="mt-4 text-xl text-gray-200">Smarter ESG tools for sustainable success</p>
    <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-lg text-white font-semibold">
      Start Your ESG Journey
    </button>
  </div>
</section>
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-4xl font-bold mb-6">Why We Exist</h2>
      <p className="text-gray-600 leading-relaxed">The EU’s evolving regulatory landscape ...</p>
    </div>
    <img src="/team.jpg" className="rounded-xl shadow-md" />
  </div>
</section>
{/* <section className="bg-green-50 py-20">
  <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
  <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
    {services.map((item, index) => (
      <div key={index} className="p-6 bg-white rounded-xl shadow hover:scale-105 transition">
        <img src={item.icon} className="h-10 mb-4" />
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-gray-500 text-sm">{item.description}</p>
      </div>
    ))}
  </div>
</section>
<section className="py-16 bg-white">
  <h2 className="text-3xl font-bold text-center mb-10">Latest Blog Posts</h2>
  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {blogs.map(blog => (
      <div className="bg-gray-50 p-5 rounded-xl shadow">
        <img src={blog.img} className="rounded-lg mb-4" />
        <p className="text-xs text-gray-400">{blog.date}</p>
        <h3 className="font-bold text-lg mt-2">{blog.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{blog.snippet}</p>
        <a className="text-green-600 mt-3 inline-block hover:underline">Read more</a>
      </div>
    ))}
  </div>
</section>
<section className="bg-gray-100 py-16">
  <h2 className="text-3xl font-bold text-center mb-10">Client Testimonials</h2>
  <div className="flex overflow-x-scroll space-x-6 px-6">
    {testimonials.map(t => (
      <div className="min-w-[300px] bg-white rounded-xl shadow p-6">
        <img src={t.avatar} className="h-14 w-14 rounded-full mb-3" />
        <p className="italic text-gray-600">“{t.quote}”</p>
        <p className="text-sm text-gray-500 mt-2">– {t.name}, {t.location}</p>
      </div>
    ))}
  </div>
</section> */}

  </>
  )
}

export default Sample