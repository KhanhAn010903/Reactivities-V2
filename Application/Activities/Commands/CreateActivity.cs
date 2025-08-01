using System;
using Application.Core;
using Application.DTOs;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class CreateActivity
{
    public class Commands : IRequest<Result<string>>
    {
        public required CreateActivityDto ActivityDto { get; set; }
    }
    public class Handler(AppDbContext context,IMapper mapper) : IRequestHandler<Commands, Result<string>>
    {
        public async Task<Result<string>> Handle(Commands request, CancellationToken cancellationToken)
        {
            var activity = mapper.Map<Activity>(request.ActivityDto);
            context.Activities.Add(activity);
            var result = await context.SaveChangesAsync(cancellationToken) > 0;
            if (!result) return Result<string>.Failure("Failed to create the activity", 400);
            return Result<string>.Success(activity.Id);
        }
    }
}
