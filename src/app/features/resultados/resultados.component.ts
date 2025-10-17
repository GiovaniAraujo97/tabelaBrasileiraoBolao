import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Participante {
  nome: string;
  acertos: number;
  premio: number;
  posicao: number;
  telefone: string;
}

interface RodadaBolao {
  numero: number;
  nome: string;
  periodo: string;
  status: 'finalizado' | 'em-andamento' | 'aguardando';
  totalParticipantes: number;
  premioTotal: number;
  vencedores: Participante[];
  participantes: Participante[];
}

@Component({
  selector: 'app-resultados',
  imports: [CommonModule, FormsModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.scss'
})
export class ResultadosComponent {
  rodadaSelecionada = 28;
  rodadas: RodadaBolao[] = [];

  constructor() {
    this.carregarResultados();
  }

  private carregarResultados() {
    this.rodadas = [
      {
        numero: 28,
        nome: 'Rodada 28',
        periodo: '12-13 de Outubro',
        status: 'finalizado',
        totalParticipantes: 16,
        premioTotal: 100,
        vencedores: [
          { nome: 'João Silva', acertos: 8, premio: 50, posicao: 1, telefone: '(11) 99999-1234' },
          { nome: 'Maria Santos', acertos: 8, premio: 50, posicao: 1, telefone: '(11) 98888-5678' }
        ],
        participantes: [
          { nome: 'João Silva', acertos: 8, premio: 50, posicao: 1, telefone: '(11) 99999-1234' },
          { nome: 'Maria Santos', acertos: 8, premio: 50, posicao: 1, telefone: '(11) 98888-5678' },
          { nome: 'Carlos Oliveira', acertos: 7, premio: 0, posicao: 3, telefone: '(11) 97777-9012' },
          { nome: 'Ana Costa', acertos: 6, premio: 0, posicao: 4, telefone: '(11) 96666-3456' },
          { nome: 'Pedro Lima', acertos: 6, premio: 0, posicao: 4, telefone: '(11) 95555-7890' },
          { nome: 'Fernanda Souza', acertos: 5, premio: 0, posicao: 6, telefone: '(11) 94444-1234' },
          { nome: 'Roberto Dias', acertos: 5, premio: 0, posicao: 6, telefone: '(11) 93333-5678' },
          { nome: 'Camila Rocha', acertos: 4, premio: 0, posicao: 8, telefone: '(11) 92222-9012' },
          { nome: 'Lucas Martins', acertos: 4, premio: 0, posicao: 8, telefone: '(11) 91111-3456' },
          { nome: 'Sandra Ramos', acertos: 3, premio: 0, posicao: 10, telefone: '(11) 90000-8901' },
          { nome: 'Ricardo Dias', acertos: 3, premio: 0, posicao: 10, telefone: '(11) 89999-2345' },
          { nome: 'Juliana Moura', acertos: 2, premio: 0, posicao: 12, telefone: '(11) 88888-6789' },
          { nome: 'Marcos Ferreira', acertos: 2, premio: 0, posicao: 12, telefone: '(11) 87777-0123' },
          { nome: 'Carla Mendes', acertos: 1, premio: 0, posicao: 14, telefone: '(11) 86666-4567' },
          { nome: 'Eduardo Nunes', acertos: 1, premio: 0, posicao: 14, telefone: '(11) 85555-8901' },
          { nome: 'Patricia Silva', acertos: 0, premio: 0, posicao: 16, telefone: '(11) 84444-2345' }
        ]
      },
      {
        numero: 27,
        nome: 'Rodada 27',
        periodo: '5-6 de Outubro',
        status: 'finalizado',
        totalParticipantes: 12,
        premioTotal: 100,
        vencedores: [
          { nome: 'Ana Santos', acertos: 9, premio: 50, posicao: 1, telefone: '(11) 98888-5678' },
          { nome: 'Pedro Costa', acertos: 9, premio: 50, posicao: 1, telefone: '(11) 97777-9012' }
        ],
        participantes: [
          { nome: 'Ana Santos', acertos: 9, premio: 50, posicao: 1, telefone: '(11) 98888-5678' },
          { nome: 'Pedro Costa', acertos: 9, premio: 50, posicao: 1, telefone: '(11) 97777-9012' },
          { nome: 'Carlos Lima', acertos: 8, premio: 0, posicao: 3, telefone: '(11) 96666-3456' },
          { nome: 'Marina Silva', acertos: 7, premio: 0, posicao: 4, telefone: '(11) 95555-7890' },
          { nome: 'Felipe Santos', acertos: 6, premio: 0, posicao: 5, telefone: '(11) 94444-1234' },
          { nome: 'Larissa Costa', acertos: 5, premio: 0, posicao: 6, telefone: '(11) 93333-5678' },
          { nome: 'Daniel Rocha', acertos: 4, premio: 0, posicao: 7, telefone: '(11) 92222-9012' },
          { nome: 'Vanessa Lima', acertos: 3, premio: 0, posicao: 8, telefone: '(11) 91111-3456' },
          { nome: 'Thiago Dias', acertos: 2, premio: 0, posicao: 9, telefone: '(11) 90000-7890' },
          { nome: 'Bruna Martins', acertos: 1, premio: 0, posicao: 10, telefone: '(11) 89999-1234' },
          { nome: 'Rafael Souza', acertos: 1, premio: 0, posicao: 10, telefone: '(11) 88888-5678' },
          { nome: 'Isabela Ramos', acertos: 0, premio: 0, posicao: 12, telefone: '(11) 87777-9012' }
        ]
      },
      {
        numero: 26,
        nome: 'Rodada 26',
        periodo: '28-29 de Setembro',
        status: 'finalizado',
        totalParticipantes: 8,
        premioTotal: 100,
        vencedores: [
          { nome: 'Carlos Oliveira', acertos: 7, premio: 100, posicao: 1, telefone: '(11) 96666-3456' }
        ],
        participantes: [
          { nome: 'Carlos Oliveira', acertos: 7, premio: 100, posicao: 1, telefone: '(11) 96666-3456' },
          { nome: 'Mariana Costa', acertos: 6, premio: 0, posicao: 2, telefone: '(11) 95555-7890' },
          { nome: 'José Santos', acertos: 5, premio: 0, posicao: 3, telefone: '(11) 94444-1234' },
          { nome: 'Amanda Silva', acertos: 4, premio: 0, posicao: 4, telefone: '(11) 93333-5678' },
          { nome: 'Bruno Lima', acertos: 3, premio: 0, posicao: 5, telefone: '(11) 92222-9012' },
          { nome: 'Cristina Rocha', acertos: 2, premio: 0, posicao: 6, telefone: '(11) 91111-3456' },
          { nome: 'Diego Martins', acertos: 1, premio: 0, posicao: 7, telefone: '(11) 90000-7890' },
          { nome: 'Eliana Dias', acertos: 0, premio: 0, posicao: 8, telefone: '(11) 89999-1234' }
        ]
      }
    ];
  }

  getRodadaAtual(): RodadaBolao | undefined {
    return this.rodadas.find(r => r.numero === this.rodadaSelecionada);
  }

  selecionarRodada(numero: number) {
    this.rodadaSelecionada = numero;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'finalizado': return 'badge bg-success';
      case 'em-andamento': return 'badge bg-warning';
      case 'aguardando': return 'badge bg-secondary';
      default: return 'badge bg-secondary';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'finalizado': return 'Finalizado';
      case 'em-andamento': return 'Em Andamento';
      case 'aguardando': return 'Aguardando';
      default: return 'N/A';
    }
  }

  getPosicaoClass(posicao: number): string {
    if (posicao === 1) return 'text-warning'; // Ouro
    if (posicao === 2) return 'text-secondary'; // Prata
    if (posicao === 3) return 'text-warning'; // Bronze
    return 'text-muted';
  }

  getPosicaoIcon(posicao: number): string {
    if (posicao === 1) return 'fas fa-crown';
    if (posicao === 2) return 'fas fa-medal';
    if (posicao === 3) return 'fas fa-trophy';
    return 'fas fa-user';
  }
}