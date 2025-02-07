const Loader = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-red-200 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 border-t-4 border-red-600 rounded-full animate-spin"></div>
          <span className="sr-only">Cargando...</span>
        </div>
      </div>
    )
  }
  
  export default Loader
  
  