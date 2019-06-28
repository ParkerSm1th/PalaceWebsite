export interface Topics {
    results: [{
        id: number;
        title: string;
        firstPost: {
            author: {
                name: string;
                formattedName: string;
                primaryGroup: {
                    formattedName: string;
                };
            };
            date: string;
            content: string;
        };
        url: string;
    }];
}
