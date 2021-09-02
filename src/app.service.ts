import { RepoService } from './repo/repo.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly repoService: RepoService) {}

  async getHello(): Promise<string> {
    return `Total de tarefas é: ${await this.repoService.taskRepo.count()}`;
  }
}
