import {RequestModel} from './requestModel';
import {ClienteModel} from './cliente-model';

export class UtilsFunctions {

    public static mapRequest<T>(c: { new(): T; }, data: any | any[] ): RequestModel<T>  {
        let rs: RequestModel<T>;
        rs = Object.assign(new RequestModel<T>(), data);

        if (Array.isArray(data)) {
            let listado = new Array<T>();
            listado = data.map(i => Object.assign(new c, i));
            return Object.assign(new RequestModel<T>(), listado);
        } else {
            rs.setData(Object.assign(new c, data['data']));
        }

        return rs;
    }

}
