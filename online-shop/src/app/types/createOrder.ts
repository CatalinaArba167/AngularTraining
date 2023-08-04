import { OrderDetail } from "./orderDetail";

export interface CreateOrder{
    timestamp:string;
    customerId:string;
    deliveryAddress:string;
    orderDetailDtoList: Array<OrderDetail>;
}