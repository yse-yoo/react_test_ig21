import React from 'react'

function Information() {
    // TODO: APIサーバからお知らせ情報を取得
    var informations = [
        { id: 1, title: '2学期がはじまりました' },
        { id: 2, title: 'Reactの学習' },
        { id: 3, title: 'グループ開発について' },
    ]
    return (
        <div>
            <h2>Information</h2>
            <ul>
                {
                    informations.map(information => (
                        <li key={information.id}>{information.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Information