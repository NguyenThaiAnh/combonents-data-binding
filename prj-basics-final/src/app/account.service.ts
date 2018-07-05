import { LoggingService }           from './logging.service';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class AccountService {
  accounts = [
    {name: 'Master account', status: 'active'},
    {name: 'Test account', status: 'inactive'},
    {name: 'Hidden account', status: 'hidden'},
  ];

  constructor(private loggingService: LoggingService) {}

  statusUpdated = new EventEmitter<string>();
  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    // this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    // this.loggingService.logStatusChange(status);
  }
}
