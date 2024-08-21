
function Home() {
  return (
    <div style={{ // coloca 2 chaves pra indicar q ta trabalhando com uma variavel typescript e a segunda indica q e um ojeeto do tipo chave e valor
        width: "100vw",
        display: "flex",
        justifyContent: "center"
    }}>
        <div>
        <div style={{
            width: "80vw", // tamanho da div externa/viewpoint
            display: "flex",
            flexDirection: "column",// flex-direction
            alignItems: "center", // align-items//deixa tudo centralizado na vertical
        }}>
                <h2>Seja Bem Vinde!</h2>
                <p>Expresse aqui seus pensamentos e opiniões</p>
         </div>
         <div style={{ // ta jogando código css direto na div
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
         }}> 
         <img
            src="https://i.imgur.com/VpwApCU.png"
            alt="Imagem da Página Home"
            width="400px"
         />
        </div>
    </div>
  </div>

  )
}

export default Home

