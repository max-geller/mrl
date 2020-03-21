export interface Entry {    
    // Task References
    entryId: string;

    // Task State Tracking
    createdDate: Date;
    createdBy: string;
    lastModifiedDate: Date;
    lastModifiedBy: string;
    isActive: boolean;

    // Task Properties
    name: string;
    description: string;
    dueDate?: Date;
    project?: string;
    priority?: string;
    color?: string;
    labels: string;
    effort: string;
    status: string;

    // Task Management
    attachment: Array<any>;
}

