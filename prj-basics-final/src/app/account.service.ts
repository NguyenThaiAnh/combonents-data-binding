export class AccountService {
  accounts = [
    {name: 'Master account', status: 'active'},
    {name: 'Test account', status: 'inactive'},
    {name: 'Hidden account', status: 'hidden'},
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
