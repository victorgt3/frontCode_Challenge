export interface Cotacao{
    dataSaida: Date,
    dataRetorno: Date,
    tipoCargueiro: TipoCargueiro[],
    valorTotalCarga: number, 
    quantidadeCarga: number,
}

export enum TipoCargueiro
{
    Inflamavel = 1,
    RiscoBiologico = 2,
    Refrigerado = 3,
    SemCaracteristicasEspeciais = 4,
}