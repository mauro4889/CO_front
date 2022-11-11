import React from 'react'

export const Products = () => {
    return (
        <div className='container-fluid mx-0 px-0 row-2'>
            <div className='container-fluid text-center bg-secondary m-0 py-4'>
                <h3 className='fs-1 py-1'>Conoce nuestros productos</h3>
                <p className='py-1'>ARTESANALES HECHOS CON TORNO, ALFARERIA Y CERÁMICA DE DISEÑO DE AUTOR, TODOS NUESTROS PRODUCTOS SON 100% ARTESANALES</p>
            </div>
            <div className='container row'>
                <div className='col-3 bg-secondary mt-0 '>
                    <div className='container mx-auto col-10 mt-5'>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Precio
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Acción</a></li>
                                <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
                            </ul>
                        </div>
                        <div className='input-group'>
                            <input type="text" class="form-control col-1" placeholder="Desde" aria-label="Desde" />
                            <input type="text" class="form-control col-1" placeholder="Hasta" aria-label="Hasta" />
                        </div>
                    </div>
                    <div className='container mx-auto col-10 mt-4'>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Finalidad
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Acción</a></li>
                                <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                <li><a class="dropdown-item" href="#">Algo más aqui</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='container mx-auto col-8 mt-4'>
                        <p className='fs-3'>Filtros</p>
                        <div className='container form-check'>
                            <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label fs-4" for="flexCheckDefault">
                                filtro 1
                            </label>
                        </div>
                        <div className='container form-check'>
                            <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label fs-4" for="flexCheckDefault">
                                filtro 2
                            </label>
                        </div>
                        <div className='container form-check'>
                            <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label fs-4" for="flexCheckDefault">
                                filtro 3
                            </label>
                        </div>
                        <div className='container form-check'>
                            <input class="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label fs-4" for="flexCheckDefault">
                                filtro 4
                            </label>
                        </div>
                    </div>
                </div>
                <div className='col'>products</div>
            </div>
        </div>
    )
}
