import { OrderDetailDto } from "./orderDetailDto";

export interface CreateOrderDto{
    timestamp:String;
    customerId:String;
    deliveryAddress:String;
    orderDetailDtoList: Array<OrderDetailDto>;
}