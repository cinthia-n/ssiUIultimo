import { environment } from '../../environments/environment';
export class AppURL {
  static  urlBase = environment.apiPath;
  static _queryEncoder = '?';
  public static _urls = {
    usuarios             : '/usuarios',
    proveedores          : '/proveedores',
    productos            : '/productos',
    clientes             :  '/clientes',
    employees             :  '/employees',
    categorias           :  '/categorias',
    unidades             :  '/unidades',
    compras              :  '/compras',
    ventas              :  '/ventas',
    pais                 :  '/pais',
    selectproveedores    :  '/selectproveedores',
    selectproductos      :  '/selectproductos',
    selectunidades      :  '/selectunidades',
    select               :  '/select'
  };
  public static getUrlPais(): string {
    return this.urlBase + this._urls.pais;
  }
  public static getListUsuarios(): string {
    return this.urlBase + this._urls.usuarios;
  }
  public static  getUrlProveedor(): string {
    return this.urlBase + this._urls.proveedores;
  }

  public static  getUrlProducto(): string {
    return this.urlBase + this._urls.productos;
  }
  public static  getUrlSelect(): string {
    return this.urlBase + this._urls.select;
  }
  public static  getUrlSelectProveedores(): string {
    return this.urlBase + this._urls.selectproveedores;
  }
  public static  getUrlSelectProductos(): string {
    return this.urlBase + this._urls.selectproductos;
  }
  public static  getUrlSelectUnidades(): string {
    return this.urlBase + this._urls.selectunidades;
  }

  public static  getUrlCategoria(): string {
    return this.urlBase + this._urls.categorias;
  }
  public static  getUrlCategoriaEedit(): string {
    return this.urlBase + this._urls.categorias;
  }
  public static  getUrlUnidad(): string {
    return this.urlBase + this._urls.unidades;
  }
  public static  getUrlCompra(): string {
    return this.urlBase + this._urls.compras;
  }
  public static  getUrlEmployee(): string {
    return this.urlBase + this._urls.employees;
  }
  public static  getUrlVenta(): string {
    return this.urlBase + this._urls.ventas;
  }
  public static  getUrlCliente(): string {
    return this.urlBase + this._urls.clientes;
  }
}
