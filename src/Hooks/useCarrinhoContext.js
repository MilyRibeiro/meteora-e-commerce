import { useContext } from "react"
import { CarrinhoContext } from "@/context/CarrinhoContext"

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

    function mudarQuantidade(id, quantidade) {
        return carrinho.map((itemDoCarrinho) => {
            if(itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
            return itemDoCarrinho;
        })
        
    }

  function adicionarProduto(novoProduto) {
        const temOProduto = carrinho.some((itemDoCarrinho) => {
            return itemDoCarrinho.id === novoProduto.id;
        })

        if(!temOProduto) {
            novoProduto.quantidade = 1;
            setCarrinho((carrinhoAnterior) => [
                ...carrinhoAnterior,
                novoProduto
            ]);
        }

        const carrinhoAtualizado = mudarQuantidade(novoProduto.id, 1);

        setCarrinho([...carrinhoAtualizado]);
    }

    function removerProduto(id) {
        const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);
        const ehOUltimo = produto.quantidade === 1;
    
        if(ehOUltimo) {
          return setCarrinho((carrinhoAnterior) =>
             carrinhoAnterior.filter((itemDoCarrinho) => itemDoCarrinho.id !== id)
            );
        }

        const carrinhoAtualizado = mudarQuantidade(id, -1);
    
        setCarrinho([...carrinhoAtualizado]);
    }

    function removerProdutoDoCarrinho(id) {
        const produto = carrinho.filter((itemDoCarrinho) => {
            return itemDoCarrinho.id !== id;
        })
        
        setCarrinho(produto);
    }

    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto,
        removerProdutoDoCarrinho
    };
}