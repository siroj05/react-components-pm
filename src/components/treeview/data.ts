export const DATA = [
    {
        "id": 1,
        "name": "Project A",
        "startDate": "2024-10-01",
        "dueDate": "2024-10-15",
        "priority": "High",
        "children": [
            {
                "id": 2,
                "name": "Task A1",
                "startDate": "2024-10-01",
                "dueDate": "2024-10-05",
                "priority": "Medium",
                "children": [
                    {
                        "id": 3,
                        "name": "Subtask A1.1",
                        "startDate": "2024-10-02",
                        "dueDate": "2024-10-04",
                        "priority": "Low",
                        "children" : [
                            {
                                "id": 11,
                                "name": "Subtask A91.2",
                                "startDate": "2024-10-03",
                                "dueDate": "2024-10-05",
                                "priority": "High"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "name": "Subtask A1.2",
                        "startDate": "2024-10-03",
                        "dueDate": "2024-10-05",
                        "priority": "High"
                    }
                ]
            },
            {
                "id": 5,
                "name": "Task A2",
                "startDate": "2024-10-06",
                "dueDate": "2024-10-10",
                "priority": "Low",
                "children": [
                    {
                        "id": 6,
                        "name": "Subtask A2.1",
                        "startDate": "2024-10-07",
                        "dueDate": "2024-10-09",
                        "priority": "Medium"
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "name": "Project B",
        "startDate": "2024-10-16",
        "dueDate": "2024-10-30",
        "priority": "Medium",
        "children": [
            {
                "id": 8,
                "name": "Task B1",
                "startDate": "2024-10-16",
                "dueDate": "2024-10-20",
                "priority": "High",
                "children": []
            }
        ]
    },
    {
        "id": 9,
        "name": "Project C",
        "startDate": "2024-11-01",
        "dueDate": "2024-11-15",
        "priority": "Low",
        "children": [
            {
                "id": 10,
                "name": "Task C1",
                "startDate": "2024-11-01",
                "dueDate": "2024-11-05",
                "priority": "Medium",
                "children": []
            }
        ]
    }
];