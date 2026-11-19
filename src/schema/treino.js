const exercicio = {
    id: 1,
    ano: '2024',
    mes: 'Maio',
    tipo_id: 'intermediario',
    divisao_id: 1,
    nome: "Cadeira extensora (REPETIÇÕES REGRESSIVAS) - 4 SÉRIES",
    explicacao: "você terá como meta realizar uma regressão de repetições com 10 segundos de descanso entre essas repetições estabelecidas (sempre mantendo a mesma carga ALTA para todas as repetições). Apenas no final da última série você realizará uma redução de carga e fará as repetições estabelecidas para chegar até a falha muscular",
    observacao: "se na primeira série você reparar que fez as repetições com certa facilidade, aumente a carga para as próximas séries.",
    series: [
        { 
            serie: 'primeira',
            execucao: " com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:2"
        },
        {
            serie: 'segunda',
            execucao: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:20"
        },
        {
            serie: 'terceira',
            execucao: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:20 "
        },
        {
            serie: 'quarta',
            execucao: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições. Finalize descansando 30 segundos, reduzindo a carga apenas um pouco e realizando o máximo de repetições que conseguir (tente completar 20)."
        }
    ]
}

const iniciante = {
    treinoA: {

    },
    treinoB: {

    },
}

const intermediario = {
    treinoA: {
        nome: 'Inferiores com foco em Quadriceps',
        exercicios: [
            {
                nome: "Cadeira Extensora  (REPETIÇÕES REGRESSIVAS) - 4 SÉRIES ",
                explicacao: "você terá como meta realizar uma regressão de repetições com 10 segundos de descanso entre essas repetições estabelecidas (sempre mantendo a mesma carga ALTA para todas as repetições). Apenas no final da última série você realizará uma redução de carga e fará as repetições estabelecidas para chegar até a falha muscular",
                observacao: "se na primeira série você reparar que fez as repetições com certa facilidade, aumente a carga para as próximas séries.",
                series: [
                    { 
                        serie: 'primeira',
                        execucao: " com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:2"
                    },
                    {
                        serie: 'segunda',
                        execucao: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:20"
                    },
                    {
                        serie: 'terceira',
                        execucao: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:20 "
                    },
                    {
                        serie: 'quarta',
                        execucao: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições. Finalize descansando 30 segundos, reduzindo a carga apenas um pouco e realizando o máximo de repetições que conseguir (tente completar 20)."
                    }
                ]
            },
            {
                nome: "Agachamento livre (15/12/10/CLUSTER/CLUSTER/20 OU MAX) - 6 SÉRIES ",
                explicacao: "na primeira, segunda e terceira série, você irá realizar a progressão de carga e redução de repetições. Em todas as séries, você irá tentar descer em 2 segundos e subirá na explosão. Na quarta série e na quinta, você irá aumentar ainda mais a carga (carga máxima) e realizará um cluster set (o método está descrito na série) e na sexta série, você reduzirá consideravelmente a carga (voltará para a carga inicial) e tentará completar 20 repetições ou o máximo que conseguir(falha). ",
                observacao: "Se você perceber que está fazendo as repetições com facilidade, aumente a carga. Exemplo: na segunda série, você precisa colocar uma carga que te impossibilite de fazer mais que 12 repetições. Se fez 12 e sentiu que conseguiria fazer mais, aumente na próxima vez que realizar o exercício.",
                series: [
                    { 
                        serie: 'primeira',
                        execucao: "com uma carga média-alta, comece realizando 15 repetições e, a cada repetição, tente descer em 2 segundos e suba na explosão. Descanse 1:20 "
                    },
                    {
                        serie: 'segunda',
                        execucao: " aumente um pouco mais a carga e realize 12 repetições e, a cada repetição, tente tente descer em 2 segundos e suba na explosão. Descanse 1:20"
                    },
                    {
                        serie: 'terceira',
                        execucao: "aumente ainda mais um pouco mais a carga e realize 10 repetições e, a cada repetição, tente tente descer em 2 segundos e suba na explosão. Descanse 2 minutos.  "
                    },
                    {
                        serie: 'quarta',
                        execucao: "realize mais um aumento de carga (carga quase máxima) e realize 5 repetições. Descanse 20 segundos e volte a realizar mais 5 repetições. Descanse novamente 20 segundos e finalize com mais 5 repetições. Descanse 2 minutos. "
                    },
                    {
                        serie: 'quinta',
                        execucao: " realize mais um aumento de carga (carga máxima da série) e realize 4 repetições. Descanse 20 segundos e volte a realizar mais 4 repetições. Descanse novamente 20 segundos e finalize com mais 4 repetições. Descanse 2 minutos.  "
                    },
                    {
                        serie: 'sexta',
                        execucao: " reduza consideravelmente a carga (volte para a carga inicial) e seu objetivo nessa  série buscar a fadiga muscular. Comece realizando repetições em velocidade controlada (descendo e subindo em 2 segundos) e, quando não estiver mais aguentando, acelere até completar 20 repetições ou o máximo que conseguir."
                    }
                ]
            },
            {
                nome: "AGACHAMENTO HACK (OU LEG PRESS)  - 1 LENTO + 1 RÁPIDO (10/8/6+DROP SET) - 3 SÉRIES",
                sugestao: ' Sugestão: caso sua academia não tenha a máquina do hack, sua substituição será no leg press 45 ou horizontal. ',
                explicacao: ": a cada repetição, você irá realizar o combinado de 1 repetição lenta + 1 repetição rápida e isso contará como 1 repetição completa. Na repetição lenta, você tentará descer e subir em 3 segundos. A cada série, você irá aumentar um pouco mais a carga e as repetições irão reduzir. Apenas na ultima série você realizará um drop set (redução de carga) e continuará em velocidade normal até a falha. ",
                series: [
                    { 
                        serie: 'primeira',
                        execucao: "com uma carga média-alta, comece realizando 10 repetições totais (sendo 1 descendo e subindo bem lento + 1 rápida = 1 repetição completa) - ou seja, no final, você acabará realizando 20 repetições totais. Descanse 1:20"
                    },
                    {
                        serie: 'segunda',
                        execucao: " aumente um pouco mais a carga e realize 8 repetições totais (sendo 1 descendo e subindo bem lento + 1 rápida = 1 repetição completa). Descanse 1:20 "
                    },
                    {
                        serie: 'terceira',
                        execucao: " aumente um pouco mais a carga e realize 6 repetições totais (sendo 1 descendo e subindo bem lento + 1 rápida = 1 repetição completa). Sem descanso, reduza a carga e tente continuar realizando mais 10 repetições em velocidade normal. Sem descanso ainda, faça mais uma redução de carga e tente completar entre 15 a 20 repetições (ou o máximo que conseguir)."
                    },
                ]
            },
            {
                nome: "AFUNDO NO SMITH COM STEP FRENTE + AFUNDO NO SMITH SEM STEP (INSISTIDO + NORMAL + CLUSTER SET NA ULTIMA SÉRIE) - 3 SÉRIES",
                sugestao: 'se preferir, pode começar pela perna mais fraca. mantenha o tronco completamente reto na descida (desça e suba em linha reta) para ativar mais o quadríceps durante o movimento. ',
                explicacao: " exercício conjugado com variação do afundo, ou seja, com uma perna você começará realizando as repetições estipuladas do afundo no smith com step na frente e, sem descanso e com a mesma perna, continuará realizando o afundo sem o step (com a mesma perna na frente). A cada repetição no step, você irá descer e realizar 1 insistência em baixo. Após finalizar, você fará apenas no chão as repetições de afundo normal. Terminando uma perna, você repetirá a mesma sequência com a outra perna. Apenas na última série você realizará um rest pause no afundo no smith sem step. ",
                series: [
                    { 
                        serie: 'primeira',
                        execucao: "com uma perna, comece realizando 10 repetições de afundo no smith com step na frente e, a cada repetição, realize uma insistência em baixo. Após finalizar, sem descanso e ainda com a mesma perna, retire o step e continue realizando mais 10 repetições de afundo no smith. Repita a mesma sequência com a outra perna. Descanse 1:20 entre as séries. "
                    },
                    {
                        serie: 'segunda',
                        execucao: "aumente um pouco mais a carga no smith, volte para a perna que começou o  exercício e realize 8 repetições de afundo no smith com step na frente e, a cada repetição, realize uma insistência em baixo. Após finalizar, sem descanso e ainda com a mesma perna, retire o step e continue realizando mais 10 repetições de afundo no smith. Repita a mesma sequência com a outra perna. Descanse 1:20 entre as séries. "
                    },
                    {
                        serie: 'terceira',
                        execucao: " aumente um pouco mais a carga no smith, volte para a perna que começou o exercício e realize 6 repetições de afundo no smith com step na frente e, a cada repetição, realize uma insistência em baixo. Após finalizar, sem descanso e ainda com a mesma perna, retire o step e continue realizando mais 5 repetições de afundo no smith. Descanse apenas 15 segundos e realize mais 5 repetições de afundo no smith. Descanse novamente 15 segundos e finalize com mais 5 repetições. Descanse 1 minuto e repita a mesma sequência com a outra perna. "
                    },
                ]
            },
            {
                nome: "RETROCESSO ALTERNANDO NO SMITH + RETROCESSO ALTERNANDO COM HALTER(ULTIMA SÉRIE CONTINUA COM PESO CORPORAL) – 3 SÉRIES  ",
                sugestao: ' deixe o par de halter ao lado do aparelho no smith para facilitar o conjugado',
                explicacao: "Exercício conjugado, ou seja, você apenas descansará quando finalizar as repetições do retrocesso alternado com halter.  você começará realizando as repetições estipuladas de retrocesso alternando as pernas no smith e, a cada série, você aumentará a carga e reduzirá as repetições. Após finalizar, você sairá do smith, pegará um par de halter e continuará realizando as repetições estipuladas de retrocesso alternando as pernas, porém, você manterá seu joelho flexionado durante  toda execução. Apenas na ultima série, após realizar o retrocesso com halter, você largará o halter e conitnuará com peso corporal. Veja o vídeo explicativo da ficha caso tenha dúvida.    ",
                series: [
                    { 
                        serie: 'primeira',
                        execucao: " com uma carga média-alta, comece realizando 8 repetições totais (16 cada perna) de retrocesso alternando as pernas no smith. Após finalizar e sem descanso, pegue o par de halter e continue realizando mais 6 repetições totais (12 cada perna) do retrocesso alternando as pernas (sem estender completamente o joelho, mantenha flexionado). Descanse 1:20 "
                    },
                    {
                        serie: 'segunda',
                        execucao: "aumente a carga do smith e realize 6 repetições totais (12 cada perna) de retrocesso alternando as pernas no smith. Após finalizar e sem descanso, pegue o par de halter e continue realizando mais 6 repetições totais (12 cada perna) do retrocesso alternando as pernas (sem estender completamente o joelho, mantenha flexionado). Descanse 1:20 "
                    },
                    {
                        serie: 'terceira',
                        execucao: " aumente a carga do smith e realize 5 repetições totais (10 cada perna) de retrocesso alternando as pernas no smith. Após finalizar e sem descanso, pegue o par de halter  e continue realizando mais 6 repetições totais (12 cada perna) do retrocesso  alternando as pernas (sem estender completamente o joelho, mantenha flexionado).  Ainda sem descanso, largue os halteres e continue realizando apenas com peso  corporal o máximo de repetições que conseguir do retrocesso alternado sem estender completamente os joelhos. "
                    },
                ]
            },
            {
                nome: "– AGACHAMENTO FRONTAL HALTER (1 LENTO + 1 NORMAL + 1 ACELERADO) + DESCANSO ATIVO: PANTURRILHA – 3 SÉRIES",
                sugestao: ' faça o agachamento frontal com halter ou com uma anilha e deixe ao lado do local que fará a panturrilha para facilitar o conjugado.',
                explicacao: "você fará um combinado de repetições, ou seja, você realizará 1 repetição lenta + 1 normal + 1 acelerada e isso irá significar 1 repetição completa. Faça as repetições estipuladas em cada série e, após finalizar, seu descanso será realizando as repetições estipuladas de panturrilha na máquina ou no leg. Finalizando a panturrilha, você já retornará para o agachamento frontal (seu descanso no caso foi ativo: fazendo a panturrilha).  ",
                series: [
                    { 
                        serie: 'primeira',
                        execucao: "com um halter ou uma anilha, comece realizando 6 repetições totais de 1 agachamento frontal lento + 1 normal + 1 rápido (os três significou 1 repetição completa). Finalizando, realize 20 repetições de panturrilha na máquina ou no leg. Após finalizar, já retorne para o peso realizar a 2ª série de agachamento frontal.  "
                    },
                    {
                        serie: 'segunda',
                        execucao: ": com um halter ou uma anilha, comece realizando 5 repetições totais de 1 agachamento frontal lento + 1 normal + 1 rápido (os três significou 1 repetição completa). Finalizando, realize 18 repetições de panturrilha na máquina ou no leg. Após finalizar, já retorne para o peso realizar a 3ª série de agachamento frontal. "
                    },
                    {
                        serie: 'terceira',
                        execucao: ": com um halter ou uma anilha, comece realizando 4 repetições totais de 1 agachamento frontal lento + 1 normal + 1 rápido (os três significou 1 repetição completa). Finalizando, realize 16 repetições de panturrilha na máquina ou no leg. Após finalizar, já retorne para o peso realizar a 3ª série de agachamento frontal."
                    },
                ]
            },
        ]
    },
    treinoB: {
    },
    treinoC: {
    },
    treinoD: {
    },
    treinoE: {
    },
}

const avancado = {
    treinoA: {
    },
    treinoB: {
    },
    treinoC: {
    },
    treinoD: {
    },
    treinoE: {
    },
}

const treinoA = {
    nome: 'Inferiores com foco em Quadriceps',
    exercicios: [
        {
            nome: "Cadeira Extensora",
            explicacao: "você terá como meta realizar uma regressão de repetições com 10 segundos de descanso entre essas repetições estabelecidas (sempre mantendo a mesma carga ALTA para todas as repetições). Apenas no final da última série você realizará uma redução de carga e fará as repetições estabelecidas para chegar até a falha muscular",
            observacao: "se na primeira série você reparar que fez as repetições com certa facilidade, aumente a carga para as próximas séries.",
            series: [
                { 
                    serie: 'primeira',
                    execucao: " com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:2"
                },
                {
                    serie: 'segunda',
                    execucao: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:20"
                },
                {
                    serie: 'terceira',
                    execucao: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:20 "
                },
                {
                    serie: 'quarta',
                    execucao: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições. Finalize descansando 30 segundos, reduzindo a carga apenas um pouco e realizando o máximo de repetições que conseguir (tente completar 20)."
                }
            ]
        },
        {
            nome: "Agachamento livre",
            explicacao: "na primeira, segunda e terceira série, você irá realizar a progressão de carga e redução de repetições. Em todas as séries, você irá tentar descer em 2 segundos e subirá na explosão. Na quarta série e na quinta, você irá aumentar ainda mais a carga (carga máxima) e realizará um cluster set (o método está descrito na série) e na sexta série, você reduzirá consideravelmente a carga (voltará para a carga inicial) e tentará completar 20 repetições ou o máximo que conseguir(falha). ",
            observacao: "Se você perceber que está fazendo as repetições com facilidade, aumente a carga. Exemplo: na segunda série, você precisa colocar uma carga que te impossibilite de fazer mais que 12 repetições. Se fez 12 e sentiu que conseguiria fazer mais, aumente na próxima vez que realizar o exercício.",
            series: [
                { 
                    serie: 'primeira',
                    execucao: "com uma carga média-alta, comece realizando 15 repetições e, a cada repetição, tente descer em 2 segundos e suba na explosão. Descanse 1:20 "
                },
                {
                    serie: 'segunda',
                    execucao: " aumente um pouco mais a carga e realize 12 repetições e, a cada repetição, tente tente descer em 2 segundos e suba na explosão. Descanse 1:20"
                },
                {
                    serie: 'terceira',
                    execucao: "aumente ainda mais um pouco mais a carga e realize 10 repetições e, a cada repetição, tente tente descer em 2 segundos e suba na explosão. Descanse 2 minutos.  "
                },
                {
                    serie: 'quarta',
                    execucao: "realize mais um aumento de carga (carga quase máxima) e realize 5 repetições. Descanse 20 segundos e volte a realizar mais 5 repetições. Descanse novamente 20 segundos e finalize com mais 5 repetições. Descanse 2 minutos. "
                },
                {
                    serie: 'quinta',
                    execucao: " realize mais um aumento de carga (carga máxima da série) e realize 4 repetições. Descanse 20 segundos e volte a realizar mais 4 repetições. Descanse novamente 20 segundos e finalize com mais 4 repetições. Descanse 2 minutos.  "
                },
                {
                    serie: 'sexta',
                    execucao: " reduza consideravelmente a carga (volte para a carga inicial) e seu objetivo nessa  série buscar a fadiga muscular. Comece realizando repetições em velocidade controlada (descendo e subindo em 2 segundos) e, quando não estiver mais aguentando, acelere até completar 20 repetições ou o máximo que conseguir."
                }
            ]
        }
    ]
}