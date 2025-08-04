using Application.Activities.Commands;
using Application.Activities.DTOs;
using Application.Activities.Queries;
using Application.DTOs;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await Mediator.Send(new GetActivityList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivitiesDetail(string id)
    {
        return HandleResult(await Mediator.Send(new GetActivityDetails.Query { Id = id }));
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(CreateActivityDto activityDto)
    {
        return HandleResult(await Mediator.Send(new CreateActivity.Commands { ActivityDto = activityDto }));
    }

    [HttpPut]
    public async Task<ActionResult> EditActivity(EditActivityDto activity)
    {
        return HandleResult(await Mediator.Send(new UpdateActivity.Commands { ActivityDto = activity }));
    }

    [HttpDelete]
    public async Task<ActionResult> DeleteActivity(string id)
    {
        return HandleResult(await Mediator.Send(new DeleteActivity.Commands { Id = id }));
    }
}