const exercicioExemplo1 = {
    mes: 'Maio',
    divisao: 'A',
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
}

const exercicioExemplo2 = {
    nome: "Cadeira Extensora",
    explicacao: "você terá como meta realizar uma regressão de repetições com 10 segundos de descanso entre essas repetições estabelecidas (sempre mantendo a mesma carga ALTA para todas as repetições). Apenas no final da última série você realizará uma redução de carga e fará as repetições estabelecidas para chegar até a falha muscular",
    observacao: "se na primeira série você reparar que fez as repetições com certa facilidade, aumente a carga para as próximas séries.",
    primeira: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:2",
    segunda: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:20",
    terceira: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:20",
    quarta: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições. Finalize descansando 30 segundos, reduzindo a carga apenas um pouco e realizando o máximo de repetições que conseguir (tente completar 20)."
}

const exercicioExemplo3 = {
    nome: "Cadeira Extensora",
    explicacao: "você terá como meta realizar uma regressão de repetições com 10 segundos de descanso entre essas repetições estabelecidas (sempre mantendo a mesma carga ALTA para todas as repetições). Apenas no final da última série você realizará uma redução de carga e fará as repetições estabelecidas para chegar até a falha muscular",
    observacao: "se na primeira série você reparar que fez as repetições com certa facilidade, aumente a carga para as próximas séries.",
    series: [
        { 
            primeira: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:2"
        },
        {
            segunda:"com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:20"
        },
        {
            terceira: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições.  Descanse 1:20 "
        },
        {
            quarta: "com uma carga ALTA (alta meeeeixmo), comece realizando 10 repetições na cadeira extensora. Descanse 10 segundos e com a mesma carga, continue realizando 8 repetições. Descanse 10 segundos e com a mesma carga, continue realizando 6 repetições.  Descanse 10 segundos e com a mesma carga, continue realizando 4 repetições. Finalize descansando 30 segundos, reduzindo a carga apenas um pouco e realizando o máximo de repetições que conseguir (tente completar 20)."
        }
    ]
}