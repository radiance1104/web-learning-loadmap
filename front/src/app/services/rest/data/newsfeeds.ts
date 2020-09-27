export class Newsfeed {
  message: string;
  createdAt: Date;

  decode(json: any) {
    if (json) {
      this.message = json.message;
      this.createdAt = json.createdAt ? new Date(json.createdAt) : undefined;
    }
  }
}

export class Newsfeeds {
  private sortedByDefault: Newsfeed[] = [];
  newsfeeds: Newsfeed[];

  decode(json: any) {
    if (json) {
      for (const jsonNewsfeed of json) {
        const newsfeed = new Newsfeed();
        newsfeed.decode(jsonNewsfeed);
        this.sortedByDefault.push(newsfeed);
      }
      this.sortByCreatedAt();
    }
  }

  sortByCreatedAt() {
    this.newsfeeds = this.sortedByDefault.slice();
    this.newsfeeds.sort((a, b) => {
      return b.createdAt.getTime() - a.createdAt.getTime();
    });
  }
}
