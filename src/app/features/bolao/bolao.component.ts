import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Jogo {
  timeCasa: string;
  timeVisitante: string;
  golsCasa: number | null;
  golsVisitante: number | null;
  data: string;
  horario: string;
}

interface Participante {
  nome: string;
  email: string;
  telefone: string;
}

interface RankingParticipante {
  nome: string;
  acertos: number;
}

@Component({
  selector: 'app-bolao',
  imports: [CommonModule, FormsModule],
  templateUrl: './bolao.component.html',
  styleUrl: './bolao.component.scss'
})
export class BolaoComponent {
  participante: Participante = {
    nome: '',
    email: '',
    telefone: ''
  };

  enviando = false;
  mostrarRanking = false;
  mostrarErros = false;

  // Jogos separados por data para melhor organização
  jogosSabado: Jogo[] = [
    {
      timeCasa: 'Palmeiras',
      timeVisitante: 'Mirassol',
      golsCasa: null,
      golsVisitante: null,
      data: '26/10/2025',
      horario: '16:00'
    },
    {
      timeCasa: 'Flamengo',
      timeVisitante: 'Internacional',
      golsCasa: null,
      golsVisitante: null,
      data: '26/10/2025',
      horario: '18:30'
    },
    {
      timeCasa: 'Cruzeiro',
      timeVisitante: 'Grêmio',
      golsCasa: null,
      golsVisitante: null,
      data: '26/10/2025',
      horario: '19:00'
    },
    {
      timeCasa: 'Botafogo',
      timeVisitante: 'Red Bull Bragantino',
      golsCasa: null,
      golsVisitante: null,
      data: '26/10/2025',
      horario: '21:00'
    }
  ];

  jogosDomingo: Jogo[] = [
    {
      timeCasa: 'São Paulo',
      timeVisitante: 'Bahia',
      golsCasa: null,
      golsVisitante: null,
      data: '27/10/2025',
      horario: '16:00'
    },
    {
      timeCasa: 'Corinthians',
      timeVisitante: 'Juventude',
      golsCasa: null,
      golsVisitante: null,
      data: '27/10/2025',
      horario: '18:30'
    },
    {
      timeCasa: 'Fortaleza',
      timeVisitante: 'Vasco da Gama',
      golsCasa: null,
      golsVisitante: null,
      data: '27/10/2025',
      horario: '18:30'
    },
    {
      timeCasa: 'Atlético-MG',
      timeVisitante: 'Atlético-GO',
      golsCasa: null,
      golsVisitante: null,
      data: '27/10/2025',
      horario: '19:00'
    },
    {
      timeCasa: 'Fluminense',
      timeVisitante: 'Vitória',
      golsCasa: null,
      golsVisitante: null,
      data: '27/10/2025',
      horario: '21:00'
    }
  ];

  jogosSegunda: Jogo[] = [
    {
      timeCasa: 'Criciúma',
      timeVisitante: 'Cuiabá',
      golsCasa: null,
      golsVisitante: null,
      data: '28/10/2025',
      horario: '20:00'
    }
  ];

  // Getter para todos os jogos (usado na validação e envio)
  get todosJogos(): Jogo[] {
    return [...this.jogosSabado, ...this.jogosDomingo, ...this.jogosSegunda];
  }

  // Ranking exemplo (será preenchido após atualização dos resultados)
  ranking: RankingParticipante[] = [
    { nome: 'João Silva', acertos: 8 },
    { nome: 'Maria Santos', acertos: 7 },
    { nome: 'Pedro Costa', acertos: 6 },
    { nome: 'Ana Oliveira', acertos: 6 },
    { nome: 'Carlos Lima', acertos: 5 }
  ];

  enviarPalpites() {
    console.log('=== DEBUG ENVIO ===');
    console.log('Participante:', this.participante);
    console.log('Jogos:', this.todosJogos);
    
    const validacao = this.validarPalpites();
    console.log('Validação passou:', validacao);
    
    if (!validacao) {
      // Mostrar erros visuais na tela
      this.mostrarErros = true;
      
      // Scroll para o topo para mostrar o alerta
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Remover os erros após 10 segundos
      setTimeout(() => {
        this.mostrarErros = false;
      }, 10000);
      
      return;
    }

    // Limpar erros se tudo estiver OK
    this.mostrarErros = false;
    this.enviando = true;
    console.log('Iniciando envio...');

    // Preparar dados estruturados para email
    const dadosEnvio = this.prepararDadosParaEmail();
    
    // Simular envio (em produção, você usaria um serviço real)
    this.simularEnvioEmail(dadosEnvio);
  }

  private prepararDadosParaEmail() {
    const palpitesFormatados = this.todosJogos.map(jogo => ({
      confronto: `${jogo.timeCasa} x ${jogo.timeVisitante}`,
      palpite: `${jogo.golsCasa} x ${jogo.golsVisitante}`,
      data: jogo.data,
      horario: jogo.horario
    }));

    const emailBody = `
=== BOLÃO DA RODADA 29 ===

PARTICIPANTE:
- Nome: ${this.participante.nome}
- Email: ${this.participante.email}
- Telefone: ${this.participante.telefone}
- Data do Envio: ${new Date().toLocaleString('pt-BR')}

PALPITES:
${palpitesFormatados.map((p, i) => 
  `${i + 1}. ${p.confronto} - Palpite: ${p.palpite} (${p.data} às ${p.horario})`
).join('\n')}

=== FIM DOS PALPITES ===

Para atualizar: Após os jogos, compare os resultados reais com estes palpites e conte os acertos.
`;

    return {
      participante: this.participante,
      palpites: palpitesFormatados,
      emailBody: emailBody,
      dataEnvio: new Date().toLocaleString('pt-BR')
    };
  }

  private simularEnvioEmail(dados: any) {
    console.log('=== DADOS PARA SEU EMAIL ===');
    console.log(dados.emailBody);
    console.log('==============================');

    // Preparar mensagem para WhatsApp
    const mensagemWhatsApp = this.prepararMensagemWhatsApp(dados);
    const numeroWhatsApp = '5511958520419'; // Formato internacional
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;

    // Simular delay de envio
    setTimeout(() => {
      this.enviando = false;
      
      // Abrir WhatsApp
      window.open(urlWhatsApp, '_blank');
      
      alert(`Palpites preparados! 🎯

Participante: ${this.participante.nome}
Total de jogos: ${this.todosJogos.length}

Você será redirecionado para o WhatsApp para enviar seus palpites.

Boa sorte no bolão! 💰`);
      
      this.resetarFormulario();
    }, 1000);
  }

  private prepararMensagemWhatsApp(dados: any): string {
    const palpites = dados.palpites.map((p: any, i: number) => 
      `${i + 1}. ${p.confronto} - *${p.palpite}* (${p.data} ${p.horario})`
    ).join('\n');

    return `🏆 *BOLÃO DA RODADA 29*

👤 *Participante:* ${this.participante.nome}
📧 *Email:* ${this.participante.email}
📱 *Telefone:* ${this.participante.telefone}
📅 *Enviado em:* ${dados.dataEnvio}
💰 *Taxa de Participação:* R$ 10,00

⚽ *MEUS PALPITES:*
${palpites}

🎯 _Brasileirão 2025 - Rodada 29_
💵 _Prêmio: R$ 100,00 para quem acertar mais!_`;
  }

  private validarPalpites(): boolean {
    // Verificar se dados do participante estão preenchidos
    if (!this.participante.nome || !this.participante.email || !this.participante.telefone) {
      return false;
    }

    // Verificar se todos os jogos têm palpites
    return this.todosJogos.every(jogo => 
      jogo.golsCasa !== null && 
      jogo.golsVisitante !== null &&
      jogo.golsCasa >= 0 && 
      jogo.golsVisitante >= 0
    );
  }

  getJogosSemPalpite(): Jogo[] {
    return this.todosJogos.filter(jogo => 
      jogo.golsCasa === null || jogo.golsVisitante === null ||
      jogo.golsCasa < 0 || jogo.golsVisitante < 0
    );
  }

  jogoTemErro(jogo: Jogo): boolean {
    return this.mostrarErros && (
      jogo.golsCasa === null || jogo.golsVisitante === null ||
      jogo.golsCasa < 0 || jogo.golsVisitante < 0
    );
  }

  private resetarFormulario() {
    this.participante = { nome: '', email: '', telefone: '' };
    [...this.jogosSabado, ...this.jogosDomingo, ...this.jogosSegunda].forEach(jogo => {
      jogo.golsCasa = null;
      jogo.golsVisitante = null;
    });
  }

  // Método para mostrar ranking (será chamado após atualização dos resultados)
  exibirRanking() {
    this.mostrarRanking = true;
  }
}
