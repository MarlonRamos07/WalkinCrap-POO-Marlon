export class Random {
    public static randomizar(minimo: number, maximo: number) {
        const valorAleatorio = Math.round( minimo + Math.random() * (maximo - minimo) );
        return valorAleatorio;
    }
}