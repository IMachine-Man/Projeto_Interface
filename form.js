function queryString(parameter) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name === parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1)
        }
    }
    

    let nome_do_filme = document.getElementById("nome_do_filme")
    const image = document.createElement('img')
    let recomendacao = document.getElementById("recomendacao")
    let descricao = document.getElementById("descricao")
    let duracao = document.getElementById("duracao")
    let tags = document.getElementById("tags")
    let direcao = document.getElementById("direcao")
    let roteiro = document.getElementById("roteiro")
    let elenco = document.getElementById("elenco")
    let titulo_original = document.getElementById("titulo_original")
    let streaming = document.getElementById('streaming')
    const image1 = document.createElement('img')
   


    
    
    document.getElementById('banner').appendChild(image)
    document.getElementById('plataforma').appendChild(image1)
    

    if(param_value === 'vingadores_ultimato'){
            nome_do_filme.innerText = 'Vingadores Ultimato'
            recomendacao.innerText = 'Não recomendado para menores de 12 anos'
            descricao.innerText = 'Em Vingadores Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.'
            image.src = '../img/Vingadores.jpeg'
            duracao.innerText = '3h 01min'
            tags.innerText = 'Ação , Fantasia , Aventura'
            direcao.innerText = 'Joe Russo , Anthony Russo'
            roteiro.innerText = 'Christopher Markus , Stephen McFeely'
            elenco.innerText = 'Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth, Mark Ruffalo e Jeremy Renner'
            titulo_original.innerText = 'Avengers Endgame'
            image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
            streaming.href ='https://disney.com.br/filmes/vingadores-ultimato'
            
    }else if(param_value === 'the_batman'){
        nome_do_filme.innerText = 'Batman'
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = 'Batman (The Batman, no original) segue o segundo ano de Bruce Wayne (Robert Pattinson) como o herói de Gotham, causando medo nos corações dos criminosos da sombria cidade. Com apenas alguns aliados de confiança - Alfred Pennyworth (Andy Serkis) e o tenente James Gordon (Jeffrey Wright) - entre a rede corrupta de funcionários e figuras importantes do distrito, o vigilante solitário se estabeleceu como a única personificação da vingança entre seus concidadãos. Durante uma de suas investigações, Bruce acaba envolvendo a si mesmo e Gordon em um jogo de gato e rato, ao investigar uma série de maquinações sádicas em uma trilha de pistas enigmáticas estabelecida pelo vilão Charada. Quando o trabalho acaba o levando a descobrir uma onda de corrupção que envolve o nome de sua família, pondo em risco a própria integridade e as memórias que tinha sobre seu pai, Thomas Wayne, as evidências começam a chegar mais perto de casa, precisando, Batman, forjar novos relacionamentos, para assim desmascarar o culpado e fazer justiça ao abuso de poder e à corrupção que há muito tempo assola Gotham City.'
        image.src = '../img/Batman2.jpg'
        duracao.innerText = '2h 57min'
        tags.innerText = 'Ação, Aventura, Drama, Fcção científica'
        direcao.innerText = 'Matt Reeves'
        roteiro.innerText = 'Matt Reeves , Peter Craig'
        elenco.innerText = 'Robert Pattinson , Zoë Kravitz , Paul Dano'
        titulo_original.innerText = 'The Batman'
        image1.src = 'https://ingresso-a.akamaihd.net/sitenovo-2017/comum/img/logoingresso@3x.png'
        streaming.href ='https://m.ingresso.com/filme/batman?partnership=home'

    }else 
    if(param_value === 'eternos'){
        nome_do_filme.innerText = 'Eternos'
        recomendacao.innerText = 'Não recomendado para menores de 12 anos'
        descricao.innerText = 'Eternos são seres super dotados com características como imortalidade e manipulação de energia cósmica, e eles são frutos de experiências fracassadas de seu próprio criador, o Celestial Arishem, desde a criação da Terra há milhões de anos. Destinados a salvar o mundo e a raça humana dos Deviantes, seres também criados pelo Celestial, os Eternos então derrotam tais seres e seguem caminhos diferentes, esperando que seu criador volte com boas novas. Mas após séculos e milênios aguardando ele, o grupo de heróis imortais agora precisa se preparar para uma nova ameaça, e precisam lutar contra os Deviantes novamente para garantir a segurança da humanidade. Muitos conflitos internos podem surgir, entre o amor que sentem pela Terra e a necessidade de protegê-la acima de tudo, e a fé naquilo que está acima deles. Cada um deverá lutar pelo o que acredita, e defender o que for mais importante. Eternos se passa pouco tempo após os acontecimentos de Vingadores: Ultimato (2019), dentro do universo MCU, inspirado nos quadrinhos, em adaptação da Marvel Studios.'
        image.src = '../img/Eternos2.jpg'
        duracao.innerText = '2h 37min'
        tags.innerText = 'Ficção científica, Fantasia, Ação'
        direcao.innerText = 'Chlóe Zhao'
        roteiro.innerText = 'Jack Kirby, Ryan Firpo'
        elenco.innerText = 'Gemma Chan, Richard Madden, Kumail Nanjiani, Lia McHugh, Brian Tyree Henry, Lauren Ridloff, Barry Keoghan, Don Lee, Harish Patel, Kit Harington, Salma Hayek, Angelina Jolie'
        titulo_original.innerText = 'Eternals'
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
        streaming.href ='https://disney.com.br/filmes/eternos'
    }else 
    if(param_value === 'red'){
        nome_do_filme.innerText = 'Red: Crescer é uma fera'
        recomendacao.innerText = 'Livre para todas as idades'
        descricao.innerText = 'Em Red: Crescer É uma Fera, quando uma adolescente fica muito nervosa, ela se transforma em um grande panda vermelho. O longa aborda dessa forma, a jornada de amadurecimento da personagem, suas inseguranças dessa fase onde, a personagem principal está dividida entre a filha que sempre foi e sua nova personalidade, intensificada por todos os sentimentos conflitantes que a adolescência provoca. Além do caos gerado por todas as mudanças em seus interesses, relacionamentos e corpo, sempre que a garota fica muito agitada ou estressada, ela vira um panda vermelho gigante, - o que com certeza, só gera mais problemas para a jovem - sendo uma metáfora para todas as vezes que, constrangidos pelos novos desafios que se apresentam em nossas vidas, as inseguranças só se agigantam.'
        image.src = 'img/Red2.jpg'
        duracao.innerText = '1h 40min'
        tags.innerText = 'Animação, Família, Comédia'
        direcao.innerText = 'Domee Shi'
        roteiro.innerText = 'Domee Shi'
        elenco.innerText = 'Rosalie Chiang, Sandra Oh'
        titulo_original.innerText = 'Turning Red'
        image1.src = 'https://ingresso-a.akamaihd.net/sitenovo-2017/comum/img/logoingresso@3x.png'
        streaming.href ='https://m.ingresso.com/filme/red-crescer-e-uma-fera'
    }else 
    if(param_value === 'uncharted_fora_do_mapa'){
        nome_do_filme.innerText = 'Uncharted: Fora do mapa'
        recomendacao.innerText = 'Não recomendado para menores de 12 anos'
        descricao.innerText = 'Baseado em uma das séries de videogame mais vendidas e aclamadas pela crítica de todos os tempos, Uncharted: Fora do Mapa serve como uma prequela para os jogos, seguindo o jovem explorador Nathan "Nate" Drake (Tom Holland), descendente do grande explorador Francis Drake, antes de ser conhecido como um famoso explorador. Mas antes disso, Nate vivia uma vida pacata como bartender em uma cidade, mas acaba se envolvendo com um estranho que viria ser um dos seus mais confiáveis companheiros. Uncharted: Fora do Mapa mostra sua primeira aventura de caça ao tesouro com o sagaz parceiro Victor "Sully" Sullivan (Mark Wahlberg). Os dois partem em uma perigosa busca pelo "maior tesouro nunca encontrado", na cidade sul americana de El Dorado, mas a aventura acaba se estendendo por todo o mundo, enquanto rastreiam pistas que podem levar ao irmão há muito perdido de Nathan. Porém, mal sabiam eles que seriam perseguidos por um grupo de mercenários que também buscam pelo tesouro perdido.'
        image.src = 'img/Uncharted.jpeg'
        duracao.innerText = '1h 56min'
        tags.innerText = 'Aventura, Ação'
        direcao.innerText = 'Ruben Fleischer'
        roteiro.innerText = 'Rafe Judkins, Art Marcum'
        elenco.innerText = 'Tom Holland, Mark Wahlberg, Sophia Ali'
        titulo_original.innerText = 'Uncharted'
        image1.src = 'https://br.web.img3.acsta.net/commons/v9/common/svod_providers/square-disney.svg'
        streaming.href ='https://www.ingresso.com/noticias/uncharted-fora-do-mapa-novo-trailer-2-oficial-tom-holland?city=sao-paulo&partnership=home#'
    }else 
    if(param_value === 'homem-aranha_sem_volta_pra_casa'){
        nome_do_filme.innerText = ''
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = ''
        image.src = 'img/HomemAranha.jpg'
        duracao.innerText = '2h 28min'
        tags.innerText = 'Ação, Aventura, Ficção Cientifica, Fantasia'
        direcao.innerText = 'Jon Watts'
        roteiro.innerText = 'Chris McKenna, Steve Ditko'
        elenco.innerText = 'Tom Holland, Zendaya, Benedict,Cumberbatch Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, Tobey Maguire, Charlie Cox'
        titulo_original.innerText = 'Spider-Man: No Way Home'
        image1.src = 'https://ingresso-a.akamaihd.net/sitenovo-2017/comum/img/logoingresso@3x.png'
        streaming.href ='https://www.ingresso.com/filme/homem-aranha-sem-volta-para-casa?city=sao-paulo&partnership=homee&gclid=Cj0KCQjwl7qSBhD-ARIsACvV1X1FiMZTkdNhNKhTi2_aQepchZUmo6YJiixYALoYqbMdo7yi0LqQxpsaAuk8EALw_wcB#!#data=20220306'
    }else 
    if(param_value === 'projeto_adam'){
        nome_do_filme.innerText = 'Projeto Adam'
        recomendacao.innerText = 'Não recomendado para menores de 14 anos'
        descricao.innerText = 'Em O Projeto Adam, Adam Reed é um menino de 13 anos que ainda está de luto pela morte repentina de seu pai um ano antes. Ele vai para a garagem de sua casa uma noite e acaba encontrando um piloto ferido escondido. Este misterioso piloto acaba por ser a versão mais antiga de si mesmo do futuro. Um futuro onde viagens no tempo são possíveis e ele acabou voltando para seu passado, presente de Adam de 13 anos. Ele arriscou tudo para voltar no tempo em uma missão secreta. Juntos, eles devem embarcar em uma aventura no passado para encontrar seu pai, acertar as coisas e salvar o mundo. Trabalhando juntos, tanto o jovem quanto o adulto Adam, aceitam a perda de seu pai e têm a chance de curar as feridas que os moldaram. Aumentando o desafio da missão, os dois Adams descobrem que realmente não gostam muito um do outro e, se quiserem salvar o mundo, primeiro terão que descobrir como se dar bem.'
        image.src = 'img/Projeto Adam.jpg'
        duracao.innerText = '1h 46min'
        tags.innerText = 'Ficção científica, Aventura, Ação, Comédia'
        direcao.innerText = 'Shawn Levy'
        roteiro.innerText = 'Jonathan Tropper, T.S. Nowlin'
        elenco.innerText = 'Ryan Reynolds, Jennifer Garner, Zoë Saldaña, Mark Ruffalo, Catherine Keener, Alex Mallari Jr, Walker Scobell'
        titulo_original.innerText = 'The Adam Project'
        image1.src = 'https://yt3.ggpht.com/ytc/AKedOLSGvtkTBgaXkmMgyvSy10FiiI2ld6B98OUgmoL6Aw=s900-c-k-c0x00ffffff-no-rj'
        streaming.href ='https://www.netflix.com/br/title/81309354'
    }else    
    if(param_value === 'euphoria'){
        nome_do_filme.innerText = 'Euphoria'
        recomendacao.innerText = 'Não recomendado para menores de 16 anos'
        descricao.innerText = ' Em Euphoria, Rue Bennett (Zendaya) é uma jovem de 17 anos que acaba de sair da clínica de reabilitação após ter uma overdose. Rue sofre com transtornos mentais desde criança, o que a fez entrar em contato com drogas ainda no início da adolescência. Ela tenta agora se adaptar a uma vida "limpa" e volta a frequentar a escola. Mas, assim como ela, os demais alunos do ensino médio enfrentam seus próprios desafios, envolvendo sexo, drogas, amizades, relacionamentos amorosos, conflitos familiares, redes sociais e violência. À medida que luta contra a dependência química, Rue precisa lidar com todos os traumas e segredos da adolescência. Ela encontra apoio em uma nova amiga, Jules (Hunter Schafer), uma adolescente transgênero que acabou de se mudar para a cidade com o pai. A princípio, Jules tem suas próprias questões para lidar, porém, aos poucos, essa amizade vai se transformando em um intenso interesse amoroso.'
        image.src = '../img/Euphoria.jpeg'
        duracao.innerText = '54–61 minutos'
        tags.innerText = 'Drama adolescente'
        direcao.innerText = 'Sam Levinson, Augustine Frizzell, Jennifer Morriso, Pippa Bianco'
        roteiro.innerText = 'Tyler Romary, Philipp A. Barnett, Jamie Feldman, Kenneth Yu'
        elenco.innerText = 'Zendaya, Maude Apatow, Angus Cloud, Eric Dane, Alexa Demie, Jacob Elordi, Barbie Ferreira, Nika King, Storm Reid, Hunter Schafer'
        titulo_original.innerText = 'Euphoria'
        image1.src = 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png'
        streaming.href ='https://www.hbomax.com/br/pt/series/urn:hbo:series:GXKN_xQX5csPDwwEAAABj'
    }else    
    if(param_value === 'naomi'){
        nome_do_filme.innerText = 'Naomi'
        recomendacao.innerText = 'Livre para todas as idades'
        descricao.innerText = ' Em Naomi, conhecemos Naomi McDuffie (Kaci Walfall), uma adolescente divertida, confiante e apaixonada por histórias em quadrinhos. Naomi irá embarcar em uma jornada de autoconhecimento depois que um evento sobrenatural abala a pequena cidade onde vive, Port Oswego. Após o ocorrido, sua vida vira de cabeça para baixo. Seus pais, Greg e Jennifer McDuffie (Barry Watson e Mouzam Makkar), estão estranhando o comportamento da filha, que tem desmaiado constantemente. Os amigos próximos de Naomi, um grupo formado por Annabelle (Mary-Charles Jones), Nathan (Anthony Puig), Lourdes (Camila Moreno), Anthony (Will Meyers) e Jacob (Aidan Gemme), resolvem ajudá-la a investigar o mistério por trás do que chocou os militares da região. Eles encontram pistas que envolvem dois figurões da cidade e Naomi percebe que tudo isso é apenas a ponta do iceberg.'
        image.src = '../img/Naomi.jpg'
        duracao.innerText = '42-56 minutos'
        tags.innerText = 'Fantasia, Ação'
        direcao.innerText = 'Jill Blankenship, Paul Garnes, Ava Du Vernay'
        roteiro.innerText = 'Brian Bendis, Nellie Nugiel, Moe Bardach'
        elenco.innerText = 'Kaci Walfall, Cranston Johnson, Alexander Wraith, Mary-Charles Jones, Mouzam Makkar, Daniel Puig, Camila Moreno, Will Meyers, Aidan Gemme, Barry Watson'
        titulo_original.innerText = 'Euphoria'
        image1.src = 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png'
        streaming.href ='https://www.hbomax.com/br/pt/series/urn:hbo:series:GYdWHXwBh2xnDwwEAAAAF'
    }

}
queryString("filme?info")
