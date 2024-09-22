package Ex02;

public class Singleton {

    private static Estoque estoqueProdutos;

    private Singleton(){
    }

    public static synchronized Estoque getInstanciarEstoque()
    {
        if(estoqueProdutos == null)
        {
            return estoqueProdutos = new EstoqueProdutos() {
            };
        }
        return estoqueProdutos;
    };
}
